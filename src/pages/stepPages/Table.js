import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const headerTitles = [
  { name: "Nom d'aliment" },
  { name: "Created At" },
  { name: "Quantité produit" },
  { name: "Date d'expiration" },
  { name: "Date Rec Grossiste" },
  { name: "Date Rec Commerçant" },
  { name: "Nombre d'habitants" },
  { name: "Prix produit" },
  { name: "Prix D'achat" },
  { name: "Ville" },
  { name: "Reclammation" },
];

const Table = () => {
  const { stepData } = useSelector((state) => state.public);
  console.log(stepData);
  return (
    <div className="main_table">
      <table>
        <thead>
          <tr>
            {headerTitles.map((header) => (
              <Fragment key={header.name}>
                <td>{header.name}</td>
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {stepData?.map((body) => (
            <Fragment key={body._id}>
              <tr>
                <td
                  style={{
                    color: "#141522",
                  }}
                >
                  {body.nom}
                </td>
                <td>{body.createdAt}</td>
                <td>{body.qteProd}</td>
                <td>{body.DateExp}</td>
                <td>{body.DateRecGros}</td>
                <td>{body.dateRecComm}</td>
                <td>{body.nbHabitants}</td>
                <td>{body["prixProd (TND)"]}</td>
                <td>{body["prixFixe (TND)"]}</td>
                <td>{body.ville}</td>
                <td>{body.reclamation === "1" ? "True" : "False"}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
