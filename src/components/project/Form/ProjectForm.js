import Input from '../../Form/Input';
import Select from '../../Form/Select';
import SubmitButton from '../../Form/SubmitButton';
import styles from './ProjectForm.module.css';

const ProjectForm = ({btnText}) => {
  return (
    <form className={styles.form}>
        <Input type='text' text='Nome do projeto' placeholder='Insira o nome do projeto'/>
        <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total'/>
      <Select name='category_id' text='Selecione a categoria'/>
        <SubmitButton text={btnText}/>
    </form>
  );
};
export default ProjectForm;