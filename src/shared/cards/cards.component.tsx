import { FC, useState } from "react";
import { ProductDTO } from "../../interfaces/product.interface";
import { showToast } from "../notification/toast.component";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  availableQuantity: number; // Cambiado para manejar la cantidad disponible
  onEdit: (updatedProduct: ProductDTO) => void; // Callback para manejar la edición
  onDelete: () => void;
}

export const Card: FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  availableQuantity,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPrice, setEditedPrice] = useState<number | string>(price);
  const [editedQuantity, setEditedQuantity] = useState<number | string>(
    availableQuantity
  );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedPrice(price);
    setEditedQuantity(availableQuantity);
  };

  const handleConfirm = () => {
    if (
      editedTitle.trim() === '' ||
      editedDescription.trim() === '' ||
      editedPrice === '' ||
      editedQuantity === ''
    ) {
      showToast('danger', 'Por favor, completa todos los campos antes de confirmar.');  
      return; 
    }  
    const updatedProduct = {
      imageUrl,
      title: editedTitle,
      description: editedDescription,
      price: editedPrice,
      availableQuantity: editedQuantity,
    };
    onEdit(updatedProduct);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-lg p-6 m-4 shadow-md w-[95%] transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-52 object-cover rounded"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-2xl font-bold mt-3 border-b border-gray-300"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="text-gray-700 mt-2 text-lg border-b border-gray-300 w-full h-24"
          />
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => {
              const value = e.target.value;
              setEditedPrice(value === "" ? "" : Number(value));
            }}
            className="text-lg font-semibold mt-3 border-b border-gray-300"
          />
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => {
              const value = e.target.value;
              setEditedQuantity(value === "" ? "" : Number(value));
            }}
            className="text-gray-600 mt-3 text-lg border-b border-gray-300"
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mt-3">{title}</h2>
          <p className="text-gray-700 mt-2 text-lg">{description}</p>
          <p className="text-lg font-semibold mt-3">
            Precio: ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 mt-3 text-lg">
            Cantidad disponible: {availableQuantity}
          </p>
        </>
      )}
      <div className="mt-auto flex justify-between mt-5">
        {isEditing ? (
          <div className=" flex justify-center gap-[24px] w-full">
            <button
              onClick={handleCancel}
              className="bg-[#b12c2c] text-white py-2 px-4 rounded"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#3C6090] text-white py-2 px-4 rounded"
            >
              Confirmar
            </button>
          </div>
        ) : (
          <div className=" flex justify-center gap-[24px] w-full">
            <button
              onClick={handleEdit}
              className="bg-[#3C6090] text-white py-2 px-4 rounded"
            >
              Editar
            </button>
            <button
              onClick={onDelete}
              className="bg-[#b12c2c] text-white py-2 px-4 rounded"
            >
              Borrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
