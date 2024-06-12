import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


import styles from './ModalTask.module.css'

export function ModalTask({ open, onHandleClose }) {

    return (
            <Modal
            open={open}
            onClose={onHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box className={styles.modal}>
            <form>
                <header>
                    <input type="text" placeholder="Nome da Task" />

                    <IconButton onClick={onHandleClose}>
                        <CloseIcon />
                    </IconButton>
                </header>

                <textarea name="description" placeholder="Descrição da Task"/>

                <footer>
                    <button>
                        Cancelar
                    </button>
                    <button>
                        Salvar
                    </button>
                </footer>
            </form>
        </Box>
    </Modal>
    );
}
