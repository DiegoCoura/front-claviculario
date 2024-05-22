import { useForm } from "react-hook-form";
import { RequestContainer } from "../../pages/User/ClassRequests/ClassRequestsStyled";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function SearchForm({ placeholder, inputName, onSearch }) {
    const {
        register: registerSearch,
        handleSubmit: handleSearch,
      } = useForm();      
    
  return (
    <>
      <RequestContainer>
        <form action="get" onSubmit={handleSearch(onSearch)}>
          <Input
            type="text"
            placeholder={placeholder}
            name={inputName}
            register={registerSearch}
          />
          <Button type={"submit"} text={`Buscar ${placeholder}`} />
        </form>
      </RequestContainer>{" "}
    </>
  );
}
