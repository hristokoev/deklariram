'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import calculateTaxes from '@/app/utils/calculate';
import ModalAction from '@/app/components/modal-action';
import Banner from '@/app/components/banner';
// import Image01 from '@/public/images/transactions-image-06.svg'

export default function CalculateForm() {

	const [calculated, setCalculated] = useState(false);
	const [bruttoSalary, setBruttoSalary] = useState(0);
	const [paidTaxes, setPaidTaxes] = useState(0);
	const [paidBonus, setPaidBonus] = useState(0);
	const [result, setResult] = useState(0);

	// Modal
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [modalData, setModalData] = useState<any>(null)

	const calculate = () => {
		const result = calculateTaxes(bruttoSalary, paidTaxes, paidBonus, 12);
		setCalculated(true);
		setResult(result);
	}

	const sendData = async () => {
		const response = await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify({ amount: result > 0 ? result : result * -1 }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	}

	useEffect(() => {
		if (modalOpen) {
			sendData().then((data) => {
				setModalData(data);
			});
		}
	}, [modalOpen]);

	return (
		<div className="p-8 space-y-8 mt-8 bg-gradient-to-b from-slate-200 to-slate-100 dark:bg-slate-800 dark:text-slate-200 rounded-lg">
			{/* Input Types */}
			<div>

				<div className="grid gap-5 md:grid-cols-3">

					<div>
						{/* Start */}
						<div>
							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="supporting-text">
									Брутен доход - ред 1
								</label>
								<input id="supporting-text" className="form-input w-full px-4 py-4 text-xl" type="number" placeholder="0" onChange={(e) => { setBruttoSalary(Number(e.target.value)); setCalculated(false) }} min={0} />
							</div>
							<div className="text-xs mt-1">Въведете сумата на брутния доход (без точката и запетаята в числото) от въпросния работодател. На <strong>ред 1</strong> ще намерите общия си брутен доход. <br /><br />Редът е озаглавен: <strong className="underline">Úhrn zúčtovaných příjmů ze závislé činnosti</strong>.</div>
						</div>
						{/* End */}
					</div>

					<div>
						{/* Start */}
						<div>
							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="supporting-text">
									Удържан авансов данък - ред 8
								</label>
								<input id="supporting-text" className="form-input w-full px-4 py-4 text-xl" type="number" placeholder="0" onChange={(e) => { setPaidTaxes(Number(e.target.value)); setCalculated(false) }} min={0} />
							</div>
							<div className="text-xs mt-1">Въведете сумата на авансовия данък, удържан от работодателя. Общият размер на удържания авансов данък може да бъде намерен на <strong>ред 8</strong>. <br /><br />Редът е озаглавен: <strong className="underline">Záloha na daň z příjmů celkem</strong>.</div>
						</div>
						{/* End */}
					</div>

					<div>
						{/* Start */}
						<div>
							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="supporting-text">
									Данъчен бонус - ред 9
								</label>
								<input id="supporting-text" className="form-input w-full px-4 py-4 text-xl" type="number" placeholder="0" onChange={(e) => { setPaidBonus(Number(e.target.value)); setCalculated(false) }} min={0} />
							</div>
							<div className="text-xs mt-1">Въведете сумата на получения данъчен бонус. Право на данъчен бонус имат само лицата с деца, за които се ползва данъчен кредит за зависими деца. Общата сума на платения данъчен бонус може да бъде намерена на <strong>ред 9</strong>. <br /><br />Редът е озаглавен: <strong className="underline">Úhrn vyplacených měsíčních daňových bonusů</strong>.</div>
						</div>
						{/* End */}
					</div>

				</div>
			</div>

			{modalData && (
				<ModalAction isOpen={modalOpen} setIsOpen={setModalOpen}>
					{/* Modal content */}
					<div className="py-8 px-4 lg:px-8 space-y-8">
						
						<div className="max-w-sm mx-auto lg:max-w-none">
							<div className="text-slate-800 dark:text-slate-100 font-semibold text-center mb-1">Почти сте готови!</div>
							<div className="text-sm text-center italic">Моля, изпратете следната сума на банковия акаунт по-долу и не забравяйте да напишете вариабилния символ (VS).</div>
							{/* Details */}
							<div className="drop-shadow-lg mt-12">
								{/* Top */}
								<div className="bg-white dark:bg-slate-700 rounded-t-xl px-5 pb-2.5 text-center">
									<div className="mb-3 text-center">
										{/* <Image className="inline-flex w-12 h-12 rounded-full -mt-6" src={Image01} width={48} height={48} alt="Transaction 04" /> */}
									</div>
									<div className="text-2xl font-semibold mb-1">{modalData.result} CZK</div>
								</div>
								{/* Divider */}
								<div className="flex justify-between items-center" aria-hidden="true">
									<svg className="w-5 h-5 fill-white dark:fill-slate-700" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
									</svg>
									<div className="grow w-full h-5 bg-white dark:bg-slate-700 flex flex-col justify-center">
										<div className="h-px w-full border-t border-dashed border-slate-200 dark:border-slate-600" />
									</div>
									<svg className="w-5 h-5 fill-white dark:fill-slate-700 rotate-180" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
									</svg>
								</div>
								{/* Bottom */}
								<div className="bg-white dark:bg-slate-800 dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-700/70 rounded-b-xl p-5 pt-2.5 text-sm space-y-3">
									<div className="flex justify-between space-x-1">
										<span className="italic">IBAN:</span>
										<span className="font-medium text-slate-700 dark:text-slate-100 text-right">CZ86 0800 0000 0029 1431 4013</span>
									</div>
									<div className="flex justify-between space-x-1">
										<span className="italic">BIC:</span>
										<span className="font-medium text-slate-700 dark:text-slate-100 text-right">GIBACZPX</span>
									</div>
									<div className="flex justify-between space-x-1">
										<span className="italic">Вариабилен символ <br />Variabilní symbol - VS:</span>
										<span className="font-medium text-slate-700 dark:text-slate-100 text-right">{modalData.variableSymbol}</span>
									</div>
									<div className="flex justify-between space-x-1">
										<span className="italic">Име:</span>
										<span className="font-medium text-slate-700 dark:text-slate-100 text-right">HRISTO KOEV</span>
									</div>
								</div>
							</div>

						</div>

						<div className="flex items-center justify-between">
							<Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto" href="#">Напред -&gt;</Link>
						</div>

						{result * -1 > 0 && (
							<Banner type="success">
								Ще ви върнем 100% от цената ({modalData.result} CZK), ако не получите изчислената сума при спазване на условията. Повече за това <a href="https://deklariram.cz" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">тук</a>.
							</Banner>
						)}

					</div>

				</ModalAction>
			)}

			{!calculated && (
				<div className="flex justify-center">
					<button className="btn-lg bg-indigo-500 hover:bg-indigo-600 text-white" onClick={calculate}>
						Изчисляване
					</button>
				</div>
			)}

			{calculated && (
				<div>
					<div className="text-center mb-6">
						<h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Резултат</h2>
						{/* {result} */}
						<div className={`text-5xl font-bold ${result < 0 ? 'text-emerald-500' : result > 0 && 'text-red-500'}`}>{result <= 0 ? `${(result == 0 ? 0 : result * -1).toLocaleString()}` : `-${result.toLocaleString()}`} CZK</div>
					</div>

					{result * -1 > 0 ? (
						<div>
							<div className="text-center mb-6">Изглежда, че имате надплащане на данъци от {(result == 0 ? 0 : result * -1).toLocaleString()} CZK. <br />За помощ при получаване на тази сума, натиснете върху бутона по-долу.</div>
							<div className="flex justify-center">
								<button className="btn-lg bg-emerald-500 hover:bg-emerald-600 text-white" onClick={() => setModalOpen(true)}>
									Получаване на {(result * -1).toLocaleString()} CZK
								</button>
							</div>
						</div>
					) : (
						<div>
							{result * -1 < 0 && <div className="text-center mb-6">Изглежда, че имате недоплащане на данъци. <br />Свържете се с нас, ако искате да попълним данъчната декларация за вас.</div>}
							<div className="flex justify-center">
								<button className="btn-lg bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => setModalOpen(true)}>
									Попълване на данъчна декларация
								</button>
							</div>
						</div>
					)}

				</div>
			)}

		</div>
	)
}