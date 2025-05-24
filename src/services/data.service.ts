import { TypeProyects, TypeLinks } from "../entitis/entitis";

const serializeToJson = <T>(data: any): T => {
  return JSON.parse(data) || [];
};

const fromToJsonMap = (data: { [key: string]: any }): TypeProyects => {
  return {
    id: data["id"],
    title: data["title"] || "",
    typeProyect: data["typeProyect"] || "",
    description: data["description"] || "",
    tecnologies: serializeToJson<string[]>(data["tecnologies"]),
    characteristics: serializeToJson<string[]>(data["characteristics"]),
    learning : serializeToJson<string[]>(data["learning"]),
    image: data["image"],
    imagenesProyect: serializeToJson<string[]>(data["imagenesProyect"]),
    link: data["link"],
    links: serializeToJson<TypeLinks>(data["links"]),
    status: data["status"],
    counter_likes: data["counter_likes"],
    createdAt: data["createdAt"],
  };
};

const convertToJson = (data: any) => {
  if (Array.isArray(data) || (typeof data === "object" && data !== null)) {
    return JSON.stringify(data);
  }
  return data;
};

const getProjectTypeClass = (type: string) => {
  const classes: Record<string, string> = {
    "web-site": "bg-blue-100 text-blue-800",
    "desktop-app": "bg-green-100 text-green-800",
    "mobile-android": "bg-yellow-100 text-yellow-800",
  };

  return classes[type.toLowerCase()] || "bg-gray-100 text-gray-800";
};

const getStatusClass = (status: string) => {
  const classes: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    shipped: "bg-blue-100 text-blue-800",
    inactive: "bg-red-100 text-red-800",
  };
  return classes[status.toLowerCase()] || "bg-gray-100 text-gray-800";
};

export { fromToJsonMap, getProjectTypeClass, getStatusClass, convertToJson };
