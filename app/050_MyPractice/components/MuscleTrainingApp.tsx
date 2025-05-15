"use client";

import React, { useState } from "react";

function MuscleTrainingApp() {
  const [height, setHeight] = useState<number>(); // 身長を管理する
  const [weight, setWeight] = useState<number>(); // 体重を管理する

  const handleInputHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  };
  const handleInputWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  };

  // ここでBMIを計算して表示させよう
  const calBMI = () => {
    if (height && weight) {
      return Number(weight / height ** 2);
    }
  };

  const setMessage = () => {
    const bmi = calBMI();
    if (!bmi) return;
    if (bmi < 18.5)
      return "体重不足です。プロテイン摂取と筋トレで筋肉量を増やそう！";
    if (bmi < 25)
      return "適正な体重です！全身の筋トレを続けてさらに最高の体型を目指そう！";
    return "体重過多です。脂肪燃焼のための筋トレを増やそう！";
  };

  return (
    <div className="p-4">
      {/* 身長と体重を入力するフォームを作成しよう */}
      <div>
        <label id="height">
          身長(m):
          <input
            type="number"
            id="height"
            onChange={handleInputHeight}
            value={height}
            placeholder="身長を入力して下さい"
            className="border border-white
          "
          />
        </label>
      </div>
      <div>
        <label id="weight">
          体重(kg):
          <input
            type="number"
            id="weight"
            onChange={handleInputWeight}
            placeholder="体重を入力して下さい"
            className="border border-white"
          />
        </label>
      </div>
      {/* BMI結果と筋トレオススメメッセージを表示しよう */}
      <div>BMI:{calBMI()}</div>
      <div>{setMessage()}</div>
    </div>
  );
}

export default MuscleTrainingApp;
