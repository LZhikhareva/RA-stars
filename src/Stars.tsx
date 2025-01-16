import Star from './Star';

type StarsList = {
    count?: number;
};

const Stars = ({ count }: StarsList) => {
    count = typeof count !== 'number' || count < 1 || count > 5 ? 0 : count;

    return (
        <ul className="card-body-stars">
            {Array.from({ length: count }).map((_, i) => <li key={i}> <Star /> </li>)}
        </ul>
    );
};

export default Stars;