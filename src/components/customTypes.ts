export type TLinkCard = {
  image: string,
  title: string,
  url: string,
};

export type TUser = {
  id: string,
  name: string,
  gender: "female" | "male" | "other",
  banned: boolean,
}
