import React from "react";

const ArticuloId = (props) =>{
    const {data} = props;
    return(
        <>
          <div className="head">
            <h3>¿Quién fue Carl Sagan?</h3>
            <h4>A pesar de ser famoso por sus apariciones televisivas, este científico hizo mucho más de lo que mucha gente piensa.</h4>
            <p>POR<small> DAN VRAX</small></p>
          </div>
          <div className="imagen">
            <img src={data.img} alt="" />
          </div>
          <div className="body">
            <div className="texto-art">
                <p>
                Era casi como una llamada de otro planeta: la invitación al joven astrónomo a dejar Brooklyn y visitar los lagos y desfiladeros del estado de Nueva York. "Cuando apareció una carta de Carl Sagan en mi buzón," dijo Neil deGrasse Tyson, recordando la invitación que recibió en 1975 en una reciente charla en la Biblioteca del Congreso.
                "Yo no me lo podía creer. La gente famosa no escribe algo a un extraño sin motivo alguno".
                Pero la invitación era real. Era la respuesta a su solicitud para entrar en la universidad de Cornell, y Tyson se reunió con el famoso profesor en una visita poco después. Sagan le ofreció, a los 17 años de edad, la oportunidad de poder ir al campamento de astronomía, pero Tyson finalmente terminó en Harvard en lugar de Cornell.
                De todos modos, tanto la visita como las formas o la invitación eran algo típico de Carl Sagan.
                "Trabajó muy duro por sus estudiantes, para que ellos consiguieran trabajo, se preocupó por su educación, y muchos de ellos están muy bien situados ahora", dice William Poundstone, autor de Carl Sagan: Una vida en el cosmos. "Si hablas con la gente a la cual él inspiró, con los que lo conocieron, su respuesta será uniforme y efusiva."
                "Sagan fue sin duda el científico estadounidense más famoso de la década de 1980 y principios de 1990", dice el experto en periodismo científico Declan Fahy de la American University en Washington, DC. "Después de que Cosmos llegase a medio mundo, y su fama llegó a otro nivel, y el libro de la serie pasó más de 70 semanas en la lista de los más vendidos. "
                Pero ¿quién era Carl Sagan? Científico, celebridad, escritor, profesor, escéptico, y librepensador, él era mucho más que el narrador de una serie de televisión.
                "Parte de lo que lo hizo grande fue el número de objetivos que perseguía", dice David Morrison, director del Centro Carl Sagan para el Estudio de la Vida en el Universo, en el Instituto SETI en Mountain View, California. Morrison estaba alucinado con la dimensión de los logros de Sagan y su falta de ego.
                </p>
            </div>
            <div className="aside-art">
            </div>
          </div>
        </>
    )
}

export default ArticuloId
