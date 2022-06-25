import "./Sign-in.css"

export default function Signin(){
  return(
    <div className="signin-content">
      <h1> Films, séries TV et bien plus en illimité. </h1>
      <h2>Où que vous soyez. Annulez à tout moment.</h2>
      <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
      <form>
        <input type="text" placeholder="Adresse e-mail"/>
        </form>
        <input type="submit" value="Commencer >"/>
      </div>
  );
}
