import React from "react";
import styles from "./styles.module.css";

export default function NumberDiv() {
    return (
        <div className={styles.numbers}>
            <div id="number1">
                <h1>2 / 5</h1>
                
                <p>vagas disponíveis</p>

            </div>

            <div className={styles.divBreak}></div>

            <div>
                <div style={{
                    display: "flex",
                    alignItems: "baseline",
                    height: "fit-content"
                }}>
                    <h4>R$</h4><h1>7,90</h1>
                    
                </div>

                <p>por mês</p>       

            </div>

            <div className={styles.divBreak}></div>

            <div>
                <a href="http://localhost:3000/">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 21.3334L13.3333 24C10.756 26.5774 6.57733 26.5773 4 24C1.42267 21.4227 1.42267 17.244 4 14.6667L6.66667 12C9.244 9.42268 13.4227 9.42269 16 12C16.4085 12.4085 16.7522 12.8572 17.0312 13.3334M12 6.66668L14.6667 4.00001C17.244 1.42268 21.4227 1.42269 24 4.00002C26.5773 6.57734 26.5773 10.756 24 13.3334L21.3333 16C18.756 18.5773 14.5773 18.5773 12 16C11.5915 15.5915 11.2478 15.1428 10.9688 14.6667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

                <p>acesse por convite</p>

            </div>

        </div>
    );
}
