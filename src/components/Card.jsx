import Avatar from "./Avatar";
import Detail from "./Detail";

function Card({ img, name, description }) {
    return (
        <>
            <div className="card">
                <div className="top">
                    <h3 className="name">{name}</h3>
                    <Avatar img={img} />
                </div>
                <div className="bottom">
                    <Detail detailInfo={description} />
                </div>
            </div>
        </>
    );
}

export default Card;
