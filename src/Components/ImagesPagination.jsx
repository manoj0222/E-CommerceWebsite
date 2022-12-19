import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import DesCriptionView from "./DescriptionView";

function ImagesPagination() {
  const [ImagesData, setImagesData] = useState([]);
  const [page, SetPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const ImagesStyling = {
    width: "auto",
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: "black",
    border: "2px solid black"
  };
  const parentStyling = {};

  const fetchData = async () => {
    await axios
      .get(`https://dummyjson.com/products?limit=100`)
      .then((response) => {
        if (response != null && response.data.products.length > 0) {
          setImagesData(response.data.products);
        }
      });
  };

  return (
    <>
      <div style={parentStyling}>
        <div style={ImagesStyling}>
          {ImagesData.length > 0 ? (
            ImagesData.filter((e) => !!e)
              .slice(page * 10 - 10, page * 10)
              .map((element) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <img src={element.thumbnail} style={{ width: "18rem" }} />
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <DesCriptionView props={element} />
                    </Card.Body>
                  </Card>
                );
              })
          ) : (
            <div>{"Oops Sorry Something went Wrong"}</div>
          )}
        </div>
        {ImagesData.length > 0 && (
          <div>
            <Button
              variant="info"
              className={page <= 1 ? "pagination__disable" : ""}
              onClick={() => {
                SetPage(page - 1);
              }}
            >
              {"<<"}
            </Button>
            {[...Array(ImagesData.length / 10)].map((_, index) => {
              return (
                <Button
                  key={index}
                  variant="info"
                  className={index + 1 == page ? "highlighter" : ""}
                  onClick={() => {
                    SetPage(index + 1);
                  }}
                >
                  {index + 1}
                </Button>
              );
            })}
          </div>
        )}
        <Button
          variant="info"
          className={
            page >= ImagesData.length / 10 ? "pagination__disable" : ""
          }
          onClick={() => {
            SetPage(page + 1);
          }}
        >
          {">>"}
        </Button>
      </div>
    </>
  );
}

export default ImagesPagination;
