export enum SelectedPage {
    Home = "home",
    Benefits = "benefit",
    OurClasses = "ourclasses",
    ContactUs = "contactUs"
  }

export interface BenefitType{
  icon: JSX.Element;
  title: string;
  desc: string
}
export interface ClassType{
  name: string;
  description?: string;
  image: string
}