import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'data',
    state: () => ({
        componentsArray: [
            { 
              name: 'Open New Window Btn',
              type: 'BaseButton',
              dataProps: {
                 title: 'Open new window', 
                 clickHandler: () => window.open('https://www.google.com', '_blank', 'width=500,height=500'),
                 styles: { color: 'white'}
                }
            },
            { 
              name: 'Open New Tab Btn',
              type: 'BaseButton', 
              dataProps: { 
                 title: 'Open new tab', 
                 clickHandler: () => window.open('https://www.google.com', '_blank'),
                 styles: { color: 'red'}
                }
            },
            {
              name: 'Radio btns',
              type: 'BaseInput',
              dataProps: {
                inputType: 'radio',
                name: 'radio',
                amount: 3,
              }    
            },
            {
              name: 'Calendar input',
              type: 'BaseInput',
              dataProps: {
                inputType: 'date',
                name: 'calendar',
                amount: 1
              }
            },
            {
              name: 'Checkboxes',
              type: 'BaseInput',
              dataProps: {
                 inputType: 'checkbox',
                 name: 'checkbox',
                 amount: 3
                }
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Dropdown',
              type: 'AppDropdown'
            },
            {
              name: 'Show and hide btns',
              type: 'AppShowAndHide',
              dataProps: {
                title: 'Show'
              }
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
            {
              name: 'Table',
              type: 'AppTable'
            },
        ],
        ids: [],
        componentsToRender: []
    }),

    getters: {
        toRender() {
            return this.componentsToRender = this.ids.map(index => this.componentsArray[index])
        }
    }
})