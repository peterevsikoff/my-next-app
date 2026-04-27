import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Страница не найдена</h2>
            <p className="text-gray-600 mt-2">
                Извините, запрашиваемая страница не существует.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Вернуться на главную
            </Link>
        </div>
    );
}