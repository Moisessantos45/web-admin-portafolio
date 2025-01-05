const technologiesColors = {
  React: "bg-blue-500 text-blue-900",
  VueJs: "bg-green-500 text-green-900",
  Astro: "bg-black text-white",
  Flutter: "bg-blue-500 text-blue-900",
  "Next js": "bg-black text-white",
  "Tailwind css": "bg-cyan-500 text-cyan-900",
  TailwindCss: "bg-cyan-500 text-cyan-900",
  "Node js": "bg-green-500 text-green-900",
  Express: "bg-gray-500 text-gray-900",
  Fastify: "bg-blue-500 text-blue-900",
  zustand: "bg-blue-500 text-blue-900",
  "React Query": "bg-blue-500 text-blue-900",
  "Socket IO": "bg-black text-white",
  MongoDB: "bg-green-500 text-green-900",
  Firebase: "bg-yellow-500 text-yellow-900",
  PostgreSQL: "bg-blue-500 text-blue-900",
  GraphQL: "bg-pink-500 text-pink-900",
  Apollo: "bg-gray-500 text-gray-900",
  Prisma: "bg-gray-500 text-gray-900",
  TypeScript: "bg-blue-500 text-blue-900",
  JavaScript: "bg-yellow-500 text-yellow-900",
  Dart: "bg-blue-500 text-blue-900",
  HTML: "bg-red-500 text-red-900",
  CSS: "bg-blue-500 text-blue-900",
  SASS: "bg-pink-500 text-pink-900",
  Bootstrap: "bg-purple-500 text-purple-900",
  "Material-UI": "bg-blue-500 text-blue-900",
  Figma: "bg-purple-500 text-purple-900",
  "Adobe XD": "bg-red-500 text-red-900",
  Photoshop: "bg-blue-500 text-blue-900",
  Illustrator: "bg-yellow-500 text-yellow-900",
  InDesign: "bg-red-500 text-red-900",
  "After Effects": "bg-green-500 text-green-900",
  "Premiere Pro": "bg-pink-500 text-pink-900",
  MongoDb: "bg-green-500 text-green-900",
  JWT: "bg-black text-white",
  "MUI/UI React": "bg-blue-500 text-blue-900",
  "React-Query": "bg-blue-500 text-blue-900",
  "TanStack Query": "bg-blue-500 text-blue-900",
  Pug: "bg-green-500 text-green-900",
  MySQL: "bg-blue-500 text-blue-900",
  Python: "bg-blue-500 text-blue-900",
  FastAPI: "bg-green-500 text-green-900",
  Flet: "bg-blue-500 text-blue-900",
  "lucide-vue-next": "bg-green-500 text-green-900",
  Axios: "bg-blue-500 text-blue-900",
  "vue-query": "bg-green-500 text-green-900",
  pinia: "bg-blue-500 text-blue-900",
};

type technology = keyof typeof technologiesColors;

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tecnologias: technology[];
}

interface TypeLinks {
  frontend: string;
  backend: string;
}

interface TypeProyects {
  id: string;
  title: string;
  typeProyect: string;
  description: string;
  tecnologies: string[];
  characteristics: string[];
  image: string;
  imagenesProyect: string[];
  link: string;
  createdAt: string;
  links: TypeLinks;
  status: string;
  counter_likes: number;
}

interface TypeProjectForm extends Omit<TypeProyects, "id"> {}

interface TypeKeys {
  value: string;
  isModified: boolean;
}

interface ProjectFormData {
  title: TypeKeys;
  typeProyect: TypeKeys;
  description: TypeKeys;
  tecnologies: {
    isModified: boolean;
    value: string[];
  };
  characteristics: {
    isModified: boolean;
    value: string[];
  };
  image: TypeKeys;
  imagenesProyect: {
    isModified: boolean;
    value: string[];
  };
  link: TypeKeys;
  createdAt: TypeKeys;
  links: {
    isModified: boolean;
    value: TypeLinks;
  };
  status: TypeKeys;
  counter_likes: {
    isModified: boolean;
    value: number;
  };
}

interface ProjectStoreState {
  projects: TypeProyects[];
  project: TypeProjectForm | null;
  active_technologies: technology[];
  isLoading: boolean;
}

export { technologiesColors };
export type {
  Project,
  technology,
  TypeProyects,
  ProjectStoreState,
  TypeProjectForm,
  ProjectFormData,
  TypeLinks,
};
