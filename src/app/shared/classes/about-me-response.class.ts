export class AboutMeResponse {
  name!: string;
  council!: string;
  profileImg!: string;
  description!: string;
  socialMedias!: {
    title: string;
    imgUrl: string;
    url: string;
  }[]
}
