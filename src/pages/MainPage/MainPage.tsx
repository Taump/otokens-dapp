import React from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { HeadInfo } from "./components/HeadInfo/HeadInfo";
import { CurrentInfo } from "./components/CurrentInfo/CurrentInfo";
import { ChallengersInfo } from "./components/ChallengersInfo/ChallengersInfo";
import { ChangeInfo } from "./components/ChangeInfo/ChangeInfo";
// eslint-disable-next-line max-len
import { CreateTokenModal } from "../../modals/CreateTokenModal/CreateTokenModal";
import { AddSupportModal } from "../../modals/AddSupportModal/AddSupportModal";

export const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <HeadInfo />
      <CurrentInfo />
      <ChallengersInfo />
      <ChangeInfo />

      {/*Modals*/}
      <CreateTokenModal />
      <AddSupportModal />
    </MainLayout>
  );
};
