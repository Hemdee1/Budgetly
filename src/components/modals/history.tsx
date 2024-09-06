import { Dispatch, SetStateAction } from "react";
import Modal from "../modal";
import useUserStore, { HistoryType } from "@/store/user";
import HistoryBox from "../historyBox";
import { getHistory } from "@/utils/helper";

const HistoryModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user } = useUserStore();

  const history = getHistory(user!);

  return (
    <Modal
      openModal={openModal}
      closeModal={() => setOpenModal(false)}
      height="80vh"
      width="900px"
      scroll
    >
      <h2 className="font-semibold text-gray1 text-lg sm:text-xl">
        Transaction history
      </h2>

      <div className="overflow-x-scroll sm:overflow-x-auto scrollbar">
        <div className="w-[600px] md:w-full text-sm sm:text-base">
          <div className="pr-4">
            <div className="mt-7 flex justify-between p-4 bg-[#FBFAFA] rounded-lg font-semibold text-gray1 text-center">
              <h4 className="w-[200px] text-left">Title</h4>
              <h4 className="w-[200px]">Date</h4>
              <h4 className="w-[200px]">Amount</h4>
              <h4 className="w-[200px]">Balance</h4>
            </div>
          </div>
          <div className="space-y-2 mt-2 pr-3 py-2">
            {history?.map((data, index) => (
              <HistoryBox key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HistoryModal;
