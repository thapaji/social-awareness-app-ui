import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateAdvertisement } from "./businessAction";
import { Col, Row } from "react-bootstrap";

const Rating = ({ advertisement, user }) => {
  const dispatch = useDispatch();
  const [userRating, setUserRating] = useState(
    advertisement.ratings.find((rating) => rating.userId === user?.id)?.rating || null
  );
  const [loading, setLoading] = useState(false);

  const handleRating = async (rating) => {
    setLoading(true);

    const updatedRatings = advertisement.ratings.filter((rate) => rate.userId !== user.id);
    updatedRatings.push({
      username: user.fullName,
      rating,
      image: user.imageUrl,
      userId: user.id,
    });

    const advertisementToEdit = {
      ...advertisement,
      ratings: updatedRatings,
    };

    await dispatch(updateAdvertisement(advertisement._id, advertisementToEdit, false));
    setUserRating(rating);
    setLoading(false);
  };

  const totalRatings = advertisement.ratings.length;
  const averageRating =
    totalRatings > 0
      ? Math.round(advertisement.ratings.reduce((sum, rate) => sum + rate.rating, 0) / totalRatings)
      : 0;

  return (
    <Row>
      <Col>
        <h5>
          Averages Rating:{" "}
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} color={index < averageRating ? "gold" : "gray"} />
          ))}
        </h5>
      </Col>
      {user && (
        <Col>
          <h5>
            Rate this:{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={userRating > index ? "gold" : "gray"}
                onClick={() => handleRating(index + 1)}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
            ))}
            {loading && <span className="ms-2">Saving...</span>}
          </h5>
        </Col>
      )}
    </Row>
  );
};

export default Rating;
