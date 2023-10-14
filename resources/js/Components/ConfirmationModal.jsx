import React from 'react'
import DangerButton from './DangerButton';

const ConfirmationModal = ({ isOpen, onCancel, onConfirmation, data }) => {
    if (!isOpen) return null;
    const open = isOpen ? 'modal modal-open':'modal'

    return (
        <dialog id="my_modal_1" className={open}>
            <form method="dialog" className="modal-box bg-white">
                <h3 className="font-bold text-lg">Konfirmasi Hapus Data!</h3>
                <p className="py-4">Anda yakin ingin menghapus {data}?</p>
                <div className="modal-action">
                    <button className="btn" onClick={onCancel}>Close</button>
                    <DangerButton className="btn" onClick={onConfirmation}>Delete</DangerButton>
                </div>
            </form>
        </dialog>
    )
}

export default ConfirmationModal