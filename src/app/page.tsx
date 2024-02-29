import Image from 'next/image';

import CalculateForm from "@/app/components/calculate-tax";
import Image01 from "../../public/jakub-zerdzicki-yXACBC3cioc-unsplash.jpg";

export const metadata = {
	title: 'Deklariram.cz',
	description: 'Бърз калкулатор за деклариране на данъци за 2023 г.',
}

export default function FormLibrary() {
	return (
		<div className="relative bg-white dark:bg-slate-900 h-full">
			<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

				<Image className="w-full h-96 object-cover rounded-lg mb-8" src={Image01} alt="Image 01" priority={true} />

				{/* Page header */}
				<div className="mb-8">
					<h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Бърз калкулатор за деклариране на данъци за 2023 г.</h1>
				</div>

				<div className="border-t border-slate-200 dark:border-slate-700">
					{/* Components */}
					<div className="space-y-8 mt-8">

						<div className="text-slate-600 dark:text-slate-400">
							<p className="mb-6">Този калкулатор е предназначен за лица, които са работили в Чехия през 2023 г. и са получили формуляри от работодателите си. Калкулаторът е опростен и не включва всички възможни сценарии. За точно изчисление, свържете се с нас на <a href="mailto:info@deklariram.cz" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">info@deklariram.cz</a>.</p>
							<p className="mb-6">За стойностите по-долу използвайте формуляра, озаглавен <strong>Potvrzení o zdanitelných příjmech ze závislé činnosti, zálohách na daň z těchto příjmů a daňovém zvýhodnění</strong>. Този формуляр може да бъде получен при поискване от вашия работодател.</p>
						</div>

						<CalculateForm />

						<div>
							<h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">Въпроси и отговори</h2>
							{/* Post */}
							<article className="py-4 border-b border-slate-200 dark:border-slate-700">
								<header className="flex items-start mb-2">
									<div className="mt-2 mr-3">
										<svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
											<path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
											<path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
										</svg>
									</div>
									<h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">Имал/а съм повече от един работодател за 2023 г.</h3>
								</header>
								<div className="pl-7">
									<div className="mb-2">Съберете всички суми от ред 1, 8 и 9 от всички формуляри, които сте получили от работодателите си. След това въведете общата сума в съответните полета.</div>
								</div>
							</article>
							{/* Post */}
							<article className="py-4 border-b border-slate-200 dark:border-slate-700">
								<header className="flex items-start mb-2">
									<div className="mt-2 mr-3">
										<svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
											<path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
											<path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
										</svg>
									</div>
									<h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">Имам дете/деца под 18 г. (или студент до 26 г.), за които се ползва данъчен кредит за зависими лица</h3>
								</header>
								<div className="pl-7">
									<div className="mb-2">Въведете сумата на получения данъчен бонус в съответното поле. Право на данъчен бонус имат само лицата с деца, за които се ползва данъчен кредит за зависими деца.</div>
								</div>
							</article>
							{/* Post */}
							<article className="py-4 border-b border-slate-200 dark:border-slate-700">
								<header className="flex items-start mb-2">
									<div className="mt-2 mr-3">
										<svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
											<path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
											<path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
										</svg>
									</div>
									<h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">Имам дете/деца под 18 г. (или студент до 26 г.), за които НЕ СЪМ ползвал/а данъчен кредит за зависими лица</h3>
								</header>
								<div className="pl-7">
									<div className="mb-2">Този калкулатор не е подходящ за вас. За точно изчисление, свържете се с нас на <a href="mailto:info@deklariram.cz" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">info@deklariram.cz</a>.</div>
								</div>
							</article>
							{/* Post */}
							<article className="py-4 border-b border-slate-200 dark:border-slate-700">
								<header className="flex items-start mb-2">
									<div className="mt-2 mr-3">
										<svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
											<path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
											<path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
										</svg>
									</div>
									<h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">Имам друг проблем/въпрос</h3>
								</header>
								<div className="pl-7">
									<div className="mb-2">Свържете се с нас на <a href="mailto:info@deklariram.cz" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">info@deklariram.cz</a>.</div>
								</div>
							</article>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
