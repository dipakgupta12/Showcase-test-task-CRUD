import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ModalProps {
  isModalOpen: boolean;
  getData: {
    nameofschool: string;
    degree: string;
    fieldofstudy: string;
    startyear: any;
    endyear: number;
    grade: string;
    description: string;
  }[];
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContainer = styled.div`
  flex: 1;
  display: flex;
`;

const SideNav = styled.nav`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
  margin-left: 10px;
  min-width: 250px;
`;

const Content = styled.div`
  flex: 3;
  justify-content: center;
  margin-left: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #f0f0f0;
`;

class Home extends React.Component {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      getData: [],
      selectedItem: null,
    };
  }

  componentDidMount(): void {
    axios
      .get("http://localhost:8000/getRecords/")
      .then((res) => {
        this.setState({ getData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleDelete = (id: any) => {
    const confirm = window.confirm("would you like to delete? ");
    if (confirm) {
      axios
        .delete("http://localhost:8000/deleteRecord/" + id)
        .then((res) => {
        })
    }
  };
  handleOpenModal = (item: any) => {
    this.setState({
      selectedItem: item,
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedItem: null,
      isModalOpen: false,
    });
  };
  render() {
    const { getData }: any = this.state;

    return (
      <PageContainer>
        <Header />
        <Main />

        <MainContainer>
          <SideNav>
            <b>SHowcase university</b>
          </SideNav>
          <br />
          {getData.map((item: any, i: any) => {
            console.log(item);
            return (
              <Content>
                <strong> fieldofstudy: </strong> {item.fieldofstudy} <br />
                <strong> nameofschool: </strong> {item.nameofschool} <br />
                <strong> degree: </strong> {item.degree} <br />
                <strong> grade: </strong> {item.grade} <br />
                <strong> startyear: </strong> {item.startyear} <br />
                <strong> endyear: </strong> {item.endyear} <br />
                <strong> description: </strong> {item.description} <br />
                <Link
                  to={`/read/${item._id}`}
                  className="btn btn-sm-outline btn-primary me-2"
                >
                  Read
                </Link>
                <Link
                  to={`/update/${item._id}`}
                  className="btn btn-sm-outline btn-info me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => this.handleDelete(item._id)}
                  className="btn btn-sm-outline btn-danger me-2"
                >
                  Delete
                </button>
              </Content>
            );
          })}
        </MainContainer>
        <Footer />
      </PageContainer>
    );
  }
}
export default Home;
