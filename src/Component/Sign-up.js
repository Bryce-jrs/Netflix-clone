import "./Sign-up.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Sign-up-form-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-form-main-content">
        <h1>S'identifier</h1>
        <input 
        type="text" 
        placeholder="Email ou numéro de téléphone"
        {...register("mail", {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
        })}
        />
         {errors?.mail?.type === "required" && (
              <p style={{ color: "#e87c03", 
                          fontWeight: "10px", 
                          fontSize: "13px",
                          textAlign:"left",
                          marginLeft:"70px",
                          marginRight:"70px",
                          marginTop:"-1px"
                          }}>
                Veuillez entrer une adresse mail ou un numéro de téléphone valide
              </p>
            )}
            {errors?.mail?.type === "pattern" && (
              <p style={{ color: "#e87c03", 
                          fontWeight: "10px", 
                          fontSize: "13px", 
                          textAlign:"left",
                          marginLeft:"70px",
                          marginRight:"70px",
                          marginTop:"-1px"
                          }}>
                Veuillez entrer une adresse mail ou un numéro de téléphone valide.
              </p>
            )}
        <input 
        type ="password" 
        placeholder="Mot de passe"
        {...register("Pass", {
          required: true,
          minLength: 4,
          maxLength:60,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i
        })}
        />
         {errors?.Pass?.type === "required" && (
              <p style={{ color: "#e87c03", 
              fontWeight: "10px", 
              fontSize: "13px", 
              textAlign:"left",
              marginLeft:"70px",
              marginRight:"70px",
              marginTop:"-1px"
              }}>
                Votre mot de passe doit comporter entre 4 et 60 caractères.
              </p>
            )}
            {errors?.Pass?.type === "minLength" && (
              <p style={{ color: "#e87c03", 
              fontWeight: "10px", 
              fontSize: "13px", 
              textAlign:"left",
              marginLeft:"70px",
              marginRight:"70px",
              marginTop:"-1px"
              }}>
                Votre mot de passe doit comporter entre 4 et 60 caractères.
              </p>
            )}
            {errors?.Pass?.type === "maxLength" && (
              <p style={{ color: "#e87c03", 
              fontWeight: "10px", 
              fontSize: "13px", 
              textAlign:"left",
              marginLeft:"70px",
              marginRight:"70px",
              marginTop:"-1px"
              }}>
                Votre mot de passe doit comporter entre 4 et 60 caractères.
              </p>
            )}
        </div>
        <input type="submit" value="S'identifier"/>
        </form>
        <div className="signup-form-footer">
          <div className="choiceCheck">
        <input type="checkbox" />
        <label> Se souvenir de moi </label>
        </div>
        <div className="help">
        <a href="" > besoin d'aide</a>
        </div>
        </div>
        <div className="Sign-in-link">
          <p>Première visite sur Netflix ? <a href="">Inscrivez-vous</a></p>
          </div>
          <div className="captcha">
          <p>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. 
            <a href=""> En savoir plus</a>
          </p>
          </div>
    </div>
  );
}