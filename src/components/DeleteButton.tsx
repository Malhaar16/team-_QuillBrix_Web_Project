"use client";


/**
 * This component defines a `DeleteButton` that allows authenticated users to delete a product.
 * It utilizes `NextAuth` for user session management, `fetch` for making API requests, 
 * and `react-toastify` for user feedback.
 */
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
    // Fetch the session data and authentication status.
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

   /**
   * Handles the delete operation.
   * - Sends a DELETE request to the API endpoint with the product ID.
   * - On success, redirects to the menu page and shows a success message.
   * - On failure, displays an error message using `toast`.
   */
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/menu");
      toast("The product has been deleted!");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  return (
    <button
      className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-full ml-6"
      onClick={handleDelete}
    >
      <Image src="/temporary/delete.png" alt="" width={20} height={20} />
    </button>
  );
};

export default DeleteButton;
