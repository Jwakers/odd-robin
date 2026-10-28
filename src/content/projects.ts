export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  mobileDescription?: string;
  tags: readonly string[];
  image: string;
  imageAlt: string;
  theme: "foodedo" | "gardens" | "vault";
  href?: string;
  cta: string;
};

export const projects: readonly Project[] = [
  {
    id: "foodedo",
    name: "Foodedo",
    category: "Own product · Meal planning",
    description:
      "My own meal-planning product, relaunched with a new experience for planning meals, saving recipes and building shopping lists. Designed and built by me.",
    mobileDescription:
      "My own product, relaunched. Meal plans, recipes and shopping lists in one place.",
    tags: ["Product design", "Full-stack build"],
    image: "/projects/foodedo-dashboard.webp",
    imageAlt:
      "Foodedo dashboard with meal suggestions and the Plan my week action",
    theme: "foodedo",
    href: "/projects/foodedo",
    cta: "Read the case study",
  },
  {
    id: "mike-hamer-gardens",
    name: "Mike Hamer Gardens",
    category: "Client website · Landscaping",
    description:
      "A website for a Stroud landscaping business, bringing clear services, real project photography and a direct enquiry route together.",
    tags: ["Website design", "Development"],
    image: "/projects/mike-hamer-home.webp",
    imageAlt:
      "Mike Hamer Gardens homepage showing landscaping services in Stroud and completed garden work",
    theme: "gardens",
    href: "/projects/mike-hamer-gardens",
    cta: "View project",
  },
  {
    id: "the-vault-gym",
    name: "The Vault Gym",
    category: "Client work · Fitness",
    description:
      "Reworked selected key pages on The Vault Gym’s existing website. A focused update to the pages, building on the original site.",
    mobileDescription:
      "Reworked selected key pages on The Vault Gym’s existing website, building on the original site.",
    tags: ["Page rework", "Existing website"],
    image: "/projects/vault-gym.webp",
    imageAlt: "Boxing practice at The Vault Gym",
    theme: "vault",
    cta: "More project details coming soon",
  },
];

export const foodedoFeatures = [
  {
    label: "Meal planning",
    title: "Let people try it before signing up.",
    text: "Visitors can generate a suggested week before creating an account. That lets them see the product’s value first, then adjust meals and save the plan when they are ready.",
    image: "/projects/foodedo-dashboard.webp",
    alt: "Foodedo guest dashboard with meal suggestions and a Plan my week button",
  },
  {
    label: "Recipe library",
    title: "Your own recipes belong in the plan too.",
    text: "One recipe library connects discovery with planning. People can browse meals and keep their own recipes alongside them, so the product supports familiar favourites as well as new ideas.",
    image: "/projects/foodedo-recipes.webp",
    alt: "Foodedo recipe library with search, filters and the option to bring your own recipe",
  },
  {
    label: "Planning setup",
    title: "Ask only what the plan needs.",
    text: "Days, start date and servings are grouped into a short setup step. The choices stay visible before generation, so people can shape a useful plan without filling in a long questionnaire.",
    image: "/projects/foodedo-setup.webp",
    alt: "Foodedo planning setup with choices for days, start date and servings",
  },
] as const;
