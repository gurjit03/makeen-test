import React from 'react';
import { Backdrop, DrawerWrapper } from './Drawer.style';

interface DrawerProps {
    isOpen: boolean
    onClose?: () => void
    children: React.ReactChild
}


const createPortalRoot = () => {
    const drawerRoot = document.createElement('div');
    drawerRoot.setAttribute('id', 'drawer-root');
    return drawerRoot;
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const {
        isOpen,
        onClose = () => { },
        children
    } = props;
    const bodyRef = React.useRef<HTMLElement>(document.querySelector('body'));
    const portalRootRef = React.useRef<HTMLElement>(document.getElementById('drawer-root') || createPortalRoot());

    React.useEffect(() => {
        const bodyEl = bodyRef.current;
        const portalEl = portalRootRef.current;
        if (bodyEl) {
            bodyEl.appendChild(portalEl);
        }

        const updatePageScroll = () => {
            if (bodyEl) {
                if (isOpen) {
                    bodyEl.style.overflow = 'hidden';
                } else {
                    bodyEl.style.overflow = '';
                }
            }
        };
        updatePageScroll();

        return () => {
            portalEl.remove();
            if (bodyEl) {
                bodyEl.style.overflow = ''
            }
        }
    }, [isOpen]);

    return (
        <div>
            <DrawerWrapper
                isOpen={isOpen}
                aria-hidden={isOpen ? "false" : "true"}
            >
                {children}

            </DrawerWrapper>
            <Backdrop isOpen={isOpen} onClick={onClose} />
        </div>
    )
}

export default Drawer;