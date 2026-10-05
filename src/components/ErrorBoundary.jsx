import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error de renderizado:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <h1>Algo salió mal</h1>
          <p>Ocurrió un error inesperado. Recargá la página o volvé a intentarlo en unos minutos.</p>
          <p>
            <a href="/">Volver al inicio</a>
          </p>
        </main>
      );
    }
    return this.props.children;
  }
}
