import EditTopicForm from "@/components/EditTopicForm";
import { NEXT_URL } from "@/libs/url";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${NEXT_URL}/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
