<script setup>
import todoHome from '../pages/todoHome'
</script>

<template>
    <div class="relative bg-white h-[35rem] w-[18rem] rounded-bl-3xl rounded-br-3xl rounded-tr-3xl rounded-tl-3xl border-[0.4rem] border-gray-800 shadow-xl">
        <div class="flex justify-between items-center border-b bg-gray-100 rounded-tr-2xl rounded-tl-2xl p-2">
            <div>
            <p class="text-xs">Orange SN</p>
            </div>
            <div class="flex bg-black h-7 w-24 rounded-full shadow-lg">
                <div class="w-4 h-4 bg-gray-800 rounded-full ml-auto mt-1 mr-2">
                </div>
            </div>
            <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3zm14-6v4q0 .825-.587 1.413T19 17h-5q-.825 0-1.412-.587T12 15V9q0-.825.588-1.412T14 7h5q.825 0 1.413.588T21 9h-7v6h5v-2h-2.5v-2z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M5 17q-.425 0-.712-.288T4 16v-2H2v-4h2V8q0-.425.288-.712T5 7h16q.425 0 .713.288T22 8v8q0 .425-.288.713T21 17zm1-2h13V9H6z"></path></svg>
            </div>
        </div>

        <todoHome/>
        <!-- Black div positioned at the bottom -->
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black w-[8rem] rounded-full mb-2 h-1">
        </div>   
    </div>
</template>


