export const MAX_RATING_VALUE = 5;

const RATING_INCREMENT = 0.5;

export type RatingProps = {
    rating: number;
}

export default function Rating({ rating }: RatingProps): React.ReactNode {
    const notch = getAdjustedRating(rating) - 1;
    
    return <div className="rating rating-half">
        {
            new Array(10).fill(null).map((_, index) => 
                <input 
                    key={`rating-${index}`} 
                    type="radio" 
                    disabled 
                    className={`w-6 h-12 mask bg-green-500 mask-star-2 mask-half-${index % 2 === 0 ? "1" : "2"}`} 
                    checked={ index === notch }
                />)
        }
    </div>
}

function getAdjustedRating(rating: number): number {
    return Math.round(Math.min(rating, MAX_RATING_VALUE) / RATING_INCREMENT);
}