import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins Could not be loaded");
  }

  return data;
}

export default async function createEditCabin({ newCabin, id }) {
  const isEditing = Boolean(id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const isString = typeof newCabin.image === "string";
  const imageName = isString
    ? null
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  /*
https://itqiueefnfycygbuzlhq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
*/
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create a cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!isEditing) {
    query = query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();
  }

  // B) EDIT
  if (isEditing) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select()
      .single();
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error(`Cabin Could not be ${id ? "updated" : "created"}`);
  }

  if (!isString) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return null;
}
