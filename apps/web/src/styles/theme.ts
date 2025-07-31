// theme.ts - Fax.Plus inspired theme
import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react';

const buttonRecipe = defineRecipe({
   variants: {
      variant: {
         solid: {
            _hover: {
               bg: 'primary.400',
               boxShadow: 'md'
            },
            borderRadius: 'lg'
         },
         outline: {
            border: '1px solid',
            borderColor: 'secondary.500',
            color: 'primary.fg',
            boxShadow: 'lg',
            _hover: {
               bg: 'primary.100',
               boxShadow: 'md'
            },
            _active: {
               bg: 'primary.muted'
            },
            borderRadius: 'lg'
         }
      }
   }
});

export const system = createSystem(defaultConfig, {
   globalCss: {
      'html, body': {
         margin: 0,
         padding: 0,
         fontSize: '16px',
         scrollBehavior: 'smooth',
         display: 'flex',
         flexDirection: 'column',
         height: '100vh',
         width: '100%',
         fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
         bg: 'bg.canvas',
         color: 'fg.default',
         colorPalette: 'primary'
      }
   },
   theme: {
      recipes: {
         button: buttonRecipe
      },
      tokens: {
         colors: {
            primary: {
               50: { value: '#eff6ff' },
               100: { value: '#dbeafe' },
               200: { value: '#bfdbfe' },
               300: { value: '#93c5fd' },
               400: { value: '#60a5fa' },
               500: { value: '#3b82f6' },
               600: { value: '#2563eb' },
               700: { value: '#1d4ed8' },
               800: { value: '#1e40af' },
               900: { value: '#1e3a8a' },
               950: { value: '#172554' }
            },
            secondary: {
               50: { value: '#f8fafc' },
               100: { value: '#f1f5f9' },
               200: { value: '#e2e8f0' },
               300: { value: '#cbd5e1' },
               400: { value: '#94a3b8' },
               500: { value: '#64748b' },
               600: { value: '#475569' },
               700: { value: '#334155' },
               800: { value: '#1e293b' },
               900: { value: '#0f172a' },
               950: { value: '#020617' }
            }
         }
      },
      semanticTokens: {
         colors: {
            // Background colors
            bg: {
               canvas: {
                  value: { _light: '{colors.secondary.50}', _dark: '{colors.secondary.900}' }
               },
               surface: {
                  value: { _light: 'white', _dark: '{colors.secondary.800}' }
               },
               muted: {
                  value: { _light: '{colors.secondary.100}', _dark: '{colors.secondary.700}' }
               },
               subtle: {
                  value: { _light: '{colors.secondary.200}', _dark: '{colors.secondary.600}' }
               }
            },

            // Primary brand colors
            primary: {
               solid: {
                  value: { _light: '{colors.primary.600}', _dark: '{colors.primary.500}' }
               },
               contrast: {
                  value: { _light: 'white', _dark: 'white' }
               },
               fg: {
                  value: { _light: '{colors.primary.600}', _dark: '{colors.primary.400}' }
               },
               muted: {
                  value: { _light: '{colors.primary.100}', _dark: '{colors.primary.900}' }
               },
               subtle: {
                  value: { _light: '{colors.primary.50}', _dark: '{colors.primary.950}' }
               }
            },

            // Secondary/neutral colors
            secondary: {
               solid: {
                  value: { _light: '{colors.secondary.600}', _dark: '{colors.secondary.400}' }
               },
               contrast: {
                  value: { _light: 'white', _dark: '{colors.secondary.900}' }
               },
               fg: {
                  value: { _light: '{colors.secondary.700}', _dark: '{colors.secondary.300}' }
               },
               muted: {
                  value: { _light: '{colors.secondary.100}', _dark: '{colors.secondary.800}' }
               },
               subtle: {
                  value: { _light: '{colors.secondary.50}', _dark: '{colors.secondary.900}' }
               }
            },

            // Text colors
            fg: {
               default: {
                  value: { _light: '{colors.secondary.900}', _dark: '{colors.secondary.100}' }
               },
               muted: {
                  value: { _light: '{colors.secondary.600}', _dark: '{colors.secondary.400}' }
               },
               subtle: {
                  value: { _light: '{colors.secondary.500}', _dark: '{colors.secondary.500}' }
               },
               disabled: {
                  value: { _light: '{colors.secondary.400}', _dark: '{colors.secondary.600}' }
               }
            },

            // Border colors
            border: {
               default: {
                  value: { _light: '{colors.secondary.200}', _dark: '{colors.secondary.700}' }
               },
               muted: {
                  value: { _light: '{colors.secondary.100}', _dark: '{colors.secondary.800}' }
               },
               subtle: {
                  value: { _light: '{colors.secondary.50}', _dark: '{colors.secondary.900}' }
               }
            },
         }
      }
   },
   strictTokens: true // Allow some flexibility for custom values
});
