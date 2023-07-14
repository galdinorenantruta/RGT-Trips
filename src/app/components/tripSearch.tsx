"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-darker_color text-center">
        Encontre sua próxima <span className="text-primary_color">viagem</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você deseja ir?" />

        <div className="flex gap-4 mt-5">
          <Input placeholder="Data de ida?" />
          <Input placeholder="Orçamento?" />
        </div>
        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
