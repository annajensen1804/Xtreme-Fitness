import { serverPath } from "../../settings";

// Lille hjælper, så vi ikke gentager fetch + fejltjek + udpakning overalt.
const getData = async (path, errorText = "Fejl ved hentning") => {
  const res = await fetch(`${serverPath}${path}`);
  if (!res.ok) throw new Response(errorText, { status: res.status });
  const json = await res.json();
  return json.data;
};

export const homeLoader = async () => {
  // Sender requests til serveren
  const exercisesPromise = getData("/exercises", "Kunne ikke hente øvelser");
  const servicesPromise = getData("/services", "Kunne ikke hente tjenester");
  const reviewsPromise = getData("/reviews", "Kunne ikke hente udtalelser");
  const subscriptionsPromise = getData(
    "/subscriptions",
    "Kunne ikke hente abonnementer",
  );
  const employeesPromise = getData("/employees", "Kunne ikke hente trænere");
  const blogsPromise = getData("/blogs", "Kunne ikke hente blogindlæg");

  // Venter kun for øvelser, som skal vises med det sammen, når vi åbner hjemmesiden
  const exercisesData = await exercisesPromise;

  return {
    exercises: exercisesData,
    services: servicesPromise,
    reviews: reviewsPromise,
    subscriptions: subscriptionsPromise,
    employees: employeesPromise,
    blogs: blogsPromise,
  };
}

export const backofficeLoader = async () => {
    return getData("/blogs")
}