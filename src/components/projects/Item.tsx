interface Project {
    id: number;
    title: string;
    desc: string;
    linkname: string;
    link: string;
    img: string;
    genre: string[];
}

interface ItemProps {
    project: Project;
}

const Item: React.FC<ItemProps> = ({ project: item }) => {

    return (
        <div className="item-container py-5 d-flex flex-row align-items-center">
            <div key={item.id} className="d-flex flex-row h-100">
                <img src={item.img} alt={item.title} className="img-fluid d-flex flex-column col-5 h-100" />
                <div className="d-flex flex-column col-7 px-5 justify-content-center">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>Tech Stack used: {item.genre.join(", ")}</p>
                    {item.link && item.link.trim() !== '' && (
                        <p>Link: <a href={item.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">{item.linkname}</a></p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Item;