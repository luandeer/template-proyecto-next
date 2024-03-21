"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center">
            <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
                404
            </span>
            <h2 className="my-2 font-heading text-2xl font-bold">
                Algo falta, algo está faltando
            </h2>
            <p>

                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="mt-8 flex justify-center gap-2">
                <Button onClick={() => router.back()} className="bg-gray-800 hover:bg-gray-700" variant="default" size="lg">
                    Regresar
                </Button>
                <Button
                    onClick={() => router.push("/")}
                    variant="ghost"
                    className="hover:bg-indigo-100"
                    size="lg"
                >
                    Volver al Inicio
                </Button>
            </div>
        </div>
    );
}