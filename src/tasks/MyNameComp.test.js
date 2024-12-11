import { render, screen } from '@testing-library/react';
import MyNameComp from './MyNameComp';

describe('MyName Component', () => {

    test('render My Name Component', () => {
        render(<MyNameComp></MyNameComp>);
        let createElement = screen.getByText(/this is My Name Component/i);
        expect(createElement).toBeInTheDocument();
    });
    
    test('render My Name Component with props name', () => {
        render(<MyNameComp name="Sai Kutthalingam S" post="Full Stack Developer"></MyNameComp>);
        let createElement = screen.getByText(/my name is: sai kutthalingam s/i);
        expect(createElement).toBeInTheDocument();
    });
    
    test('render My Name Component with props post', () => {
        render(<MyNameComp name="Sai Kutthalingam S" post="Full Stack Developer"></MyNameComp>);
        let createElement = screen.getByText(/i am: full stack developer/i);
        expect(createElement).toBeInTheDocument();
    });
    
});

