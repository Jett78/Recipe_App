import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
const customModalStyles = {
modal:{
color:"red",
},
}
const Recipecard = ({ recipe }) => {
  const {
    isOpen: isInstructionsOpen,
    onOpen: onInstructionsOpen,
    onClose: onInstructionsClose,
  } = useDisclosure();
  const {
    isOpen: isIngredientsOpen,
    onOpen: onIngredientsOpen,
    onClose: onIngredientsClose,
  } = useDisclosure();

  
  return (
    <main className="recipe-container">
      <div className="card-container">
        <div className="img-sec">
          <img
            src={recipe.strMealThumb}
            href={recipe.strYoutube}
            alt="images"
          />
          <a href={recipe.strYoutube}></a>
        </div>
        <div className="content">
          <h1>{recipe.strMeal}</h1>
          <h3 className="category">
            Category : <span>{recipe.strCategory}</span>
          </h3>
          <h3 className="area">
            Cuisine : <span>{recipe.strArea}</span>
          </h3>
          <h3 className="instructions" onClick={onInstructionsOpen}>
            <IoBookSharp />
            Instructions
          </h3>
          <h3 className="ingredients" onClick={onIngredientsOpen}>
            <FaBowlFood />
            Ingredients
          </h3>
        </div>
      </div>

    
        <Modal isOpen={isInstructionsOpen} onClose={onInstructionsClose}>
          <ModalOverlay />
          <ModalContent className="modal">
            <div className="header">
            <ModalHeader className="topic">Instructions</ModalHeader>
             <ModalCloseButton className="close" />
            </div>
            <ModalBody>{recipe.strInstructions}</ModalBody>
          </ModalContent>
        </Modal>

        {/* Ingredients Modal */}
        <Modal isOpen={isIngredientsOpen} onClose={onIngredientsClose}>
          <ModalOverlay />
          <ModalContent className="modal">
            <div className="header">
            <ModalHeader className="topic">Ingredients</ModalHeader>
            <ModalCloseButton className="close" />
            </div>
            <ModalBody className="body">
              {Array.from({ length: 20 }, (_, index) => (
                <span key={index}>
                  {recipe[`strIngredient${index + 1}`]}
                  {index < 19 && <br />}{" "}
                  {/* Add <br /> except after the last ingredient */}
                </span>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
     
    </main>
  );
};

export default Recipecard;
