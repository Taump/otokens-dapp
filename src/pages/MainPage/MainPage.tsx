import React from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { HeadInfo } from "./components/HeadInfo/HeadInfo";
import { CurrentInfo } from "./components/CurrentInfo/CurrentInfo";
import { ChallengersInfo } from "./components/ChallengersInfo/ChallengersInfo";
import { ChangeInfo } from "./components/ChangeInfo/ChangeInfo";
// eslint-disable-next-line max-len
import { CreateTokenModal } from "../../modals/CreateTokenModal/CreateTokenModal";
import { AddSupportModal } from "../../modals/AddSupportModal/AddSupportModal";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { IStore } from "../../store/reducers/index.interface";

export const MainPage: React.FC = () => {
  const loaded = useSelector((state: IStore) => state.data.loaded);
  if (!loaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
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
