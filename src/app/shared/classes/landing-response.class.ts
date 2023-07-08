import { AboutMeResponse } from "./about-me-response.class";
import { AreaOfActivityResponse } from "./area-of-activity-response.class";
import { FaqResponse } from "./faq-response.class";
import { ServiceResponse } from "./service-response.class";
import { TestimonyResponse } from "./testimony-response.class";

export class LandingResponse {
  areasOfActivity!: Array<AreaOfActivityResponse>;
  services!: Array<ServiceResponse>
  aboutMe!: AboutMeResponse;
  testimonies!: Array<TestimonyResponse>
  faq!: Array<FaqResponse>
}
