import React, { useState } from 'react';
import './ProductScreen.css';
import Navbar from '../components/Navbar';
import img1 from "../image1.jpg";
import img2 from "../image 2.jpg";
import color1 from "../couleur1.jpg";
import color2 from "../couleur2.jpg";
import color3 from "../couleur3.jpg";
import color4 from "../couelur4.jpg";


const ProductScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null); // pour suivre l'image sélectionnée
    const [product, setProduct] = useState({
        name: 'Nom du produit',
        model: 'Modèle',
        storage: 'Stockage',
        color: 'Couleur',
        images: [img1, img2] // Tableau des images du produit
    });

    // Fonction pour gérer le clic sur une image de produit
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Fonction pour gérer le clic sur le bouton "Next"
    const handleNextButtonClick = () => {
        // Logique pour naviguer vers la page de paiement
    };

    return (
        <div>
            <Navbar />
            <div className="product-screen">
                {/* Colonne 1 : Photos des produits */}
                <div className="product-column product-images">
                    {/* Afficher les photos des produits */}
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                            style={{ width: '150px', height: 'auto' }} // Ajouter le style pour ajuster la taille
                        />
                    ))}
                </div>

                {/* Colonne 2 : Photo du produit sélectionné */}
                <div className="product-column">
                    {/* Afficher la photo du produit sélectionné */}
                    {selectedImage && (
                        <img   src={selectedImage} alt="Image sélectionnée" style={{ maxWidth: '60%', height: 'auto' }} />
                    )}
                </div>
{/*colonnes 3*/}
<div className="product-column">
    {/* Afficher les informations du produit */}
    <div className="product-info">
        <h2><strong>{product.name}</strong></h2>
        <p><strong>Model Family:</strong>  </p>
            {/* Utiliser des boutons pour les options de modèle */}
            {product.model === 'Modèle' ? (
                <div className="options">
                    <button onClick={() => setProduct({...product, model: 'Option 1'})}>appel iphone 15</button>
                    <button onClick={() => setProduct({...product, model: 'Option 2'})}>appel iphone 15 pro</button>
                </div>
            ) : (
                <span>{product.model}</span>
            )}
       <div style={{ marginBottom: '20px' }}></div>
        <p><strong>Internal Memory:</strong> </p>
            {/* Utiliser des boutons pour les options de stockage */}
            {product.storage === 'Stockage' ? (
                <div className="options">
                    <button onClick={() => setProduct({...product, storage: 'Option 1'})}>128 gb</button>
                    <button onClick={() => setProduct({...product, storage: 'Option 2'})}>252 gb </button>
                    <button onClick={() => setProduct({...product, storage: 'Option 3'})}>512 gb</button>
                </div>
            ) : (
                <span>{product.storage}</span>
            )}
        <div style={{ marginBottom: '20px' }}></div>
        <p><strong>Color:</strong>
            {/* Ajoutez ici les petites images pour les couleurs, encapsulées dans des boutons */}
            <div className="color-options">
                <button onClick={() => setProduct({...product, color: 'Couleur 1'})}>
                    <img src={color1} alt="Couleur 1" />
                </button>
                <button onClick={() => setProduct({...product, color: 'Couleur 2'})}>
                    <img src={color2} alt="Couleur 2" />
                </button>
                <button onClick={() => setProduct({...product, color: 'Couleur 3'})}>
                    <img src={color3} alt="Couleur 3" />
                </button>
                <button onClick={() => setProduct({...product, color: 'Couleur 4'})}>
                    <img src={color4} alt="Couleur 4" />
                </button>
            </div>
        </p>
    </div>
</div>

            </div>
            <button className="next-button" onClick={handleNextButtonClick}>Next</button>

        </div>
    );
};

export default ProductScreen;
