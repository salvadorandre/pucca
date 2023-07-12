import "../EstilosPuka/PrimeraParte.css"; 

function PrimeraParte() { 
    return (
        <div className="Contenedor">
            <div className="imagen">
                <img src="https://i.pinimg.com/originals/84/5a/79/845a79a37a8e31b41cdbd6d9edf7af24.png" alt="" />
            </div>

            <div className="menucito">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Historia de Pucca</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PrimeraParte; 