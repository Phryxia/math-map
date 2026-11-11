# Phragmén–Lindelöf 원리

# 개요

**Phragmén–Lindelöf 원리(Phragmén–Lindelöf principle)** 는 유계가 아닌 영역에서, 함수가 너무 빨리 커지지 않으면 경계 위의 상계가 영역 전체로 이어진다는 정리다. 오른쪽 반평면에서 $e^z$ 는 허수축 위에서 절댓값이 $1$ 이지만 실수축을 따라 한없이 커지므로, 경계만 보아서는 안쪽의 크기를 알 수 없다.

이 원리는 함수의 증가 속도에 한계를 두면 경계의 상계가 안쪽에서도 성립함을 보이고, 그 한계가 $e^z$ 같은 반례의 증가 속도 바로 아래임을 정한다.

# 직관

[최대 절댓값 원리](maximum-modulus-principle.md)는 유계 영역에서 최댓값이 경계에서 나온다고 말한다. 띠 $S=\lbrace\vert\mathrm{Im}\thinspace z\vert\lt\pi/2\rbrace$ 는 유계가 아니고, $f(z)=\exp(e^z)$ 는 경계선 위에서 $\vert f\vert=1$ 이지만 실수 $x$ 에서 $\exp(e^x)$ 다.

띠를 길이 $2R$ 인 직사각형으로 자르면 최대 절댓값 원리를 쓸 수 있다. 그런데 직사각형의 세로 변 $x=\pm R$ 에서 $\vert f\vert$ 가 크면 경계 위 상계 $1$ 을 얻지 못한다. 세로 변의 값을 누르려면 그 위에서 아주 작아지는 함수를 곱한다.

$\exp(-\varepsilon\cosh(bz))$ 는 $0\lt b\lt 1$ 일 때 띠의 경계선 위에서 절댓값이 $1$ 이하이고, $x=\pm R$ 에서 대략 $\exp(-\varepsilon e^{bR}\cos(b\pi/2)/2)$ 로 작아진다. $f$ 의 증가가 $\exp(e^{a\vert x\vert})$ 이고 $a\lt b$ 이면 곱이 세로 변에서 $0$ 으로 가므로 직사각형마다 상계 $1$ 이 나오고, $\varepsilon\to 0$ 으로 보내면 $\vert f\vert\le 1$ 이다. $\exp(e^z)$ 는 $a=1$ 이어서 이 논증이 통하지 않는다.

# 정의

함수 $f$ 가 영역 $\Omega$ 에서 [정칙함수](holomorphic-functions.md)이고 폐포 $\overline\Omega$ 에서 연속이라 하자. 함수 $\Phi(r)$ 에 대해 $\vert z\vert$ 가 충분히 큰 모든 $z\in\Omega$ 에서 다음을 만족하면 $f$ 가 **증가 조건(growth condition)** $\Phi$ 를 만족한다고 한다.

$$
\vert f(z)\vert\le\exp(\Phi(\vert z\vert))
$$

오른쪽 반평면에서 $e^z$ 는 $\Phi(r)=r$ 을 만족한다. 띠 $S$ 에서는 실수부로 재어 $\vert f(z)\vert\le\exp(Ae^{a\vert\mathrm{Re}\thinspace z\vert})$ 꼴의 조건을 쓴다. $\exp(e^z)$ 는 $A=1$, $a=1$ 에서 이 조건을 만족한다.

# 성질

## 띠의 판

*정리.* $f$ 가 띠 $S$ 에서 정칙이고 $\overline S$ 에서 연속이며, 경계 위에서 $\vert f\vert\le 1$ 이고 어떤 $A$ 와 $a\lt 1$ 에 대해 $\vert f(z)\vert\le\exp(Ae^{a\vert\mathrm{Re}\thinspace z\vert})$ 이면 $S$ 전체에서 $\vert f\vert\le 1$ 이다[^1].

*증명의 요지.* $a\lt b\lt 1$, $\varepsilon\gt 0$ 을 잡고 $g(z)=f(z)\exp(-\varepsilon\cosh(bz))$ 로 둔다. $z=x+iy$, $\vert y\vert\le\pi/2$ 에서 다음이 성립하므로 경계 위에서 $\vert g\vert\le 1$ 이다.

$$
\mathrm{Re}\thinspace\cosh(bz)=\cosh(bx)\cos(by)\ge\cosh(bx)\cos(b\pi/2)\gt 0
$$

$\vert x\vert\to\infty$ 에서 $Ae^{a\vert x\vert}-\varepsilon\cos(b\pi/2)\cosh(bx)\to-\infty$ 이므로 $\vert g\vert\to 0$ 이다. 큰 직사각형에서 최대 절댓값 원리를 쓰면 $\vert g\vert\le 1$ 이고, $\varepsilon\to 0$ 에서 $\vert f\vert\le 1$ 이다. ∎

$\exp(e^z)$ 는 $a=1$ 에서 결론이 깨지므로 조건 $a\lt 1$ 은 더 약하게 할 수 없다.

## 각 영역의 판

$z\mapsto e^{z}$ 는 띠 $S$ 를 오른쪽 반평면으로 보내고, $z\mapsto z^{\pi/\alpha}$ 는 각이 $\alpha$ 인 부채꼴을 반평면으로 보낸다. 띠의 판을 옮기면 다음이 나온다. $f$ 가 각이 $\alpha$ 인 부채꼴에서 정칙이고 경계 위에서 $\vert f\vert\le 1$ 이며 어떤 $\beta\lt\pi/\alpha$ 에 대해 $\vert f(z)\vert\le\exp(C\vert z\vert^\beta)$ 이면 부채꼴 전체에서 $\vert f\vert\le 1$ 이다[^1]. 오른쪽 반평면은 $\alpha=\pi$ 이고, $e^z$ 의 증가 $\vert z\vert^1$ 이 경계 사례다.

## Hadamard 세 선 정리

띠 $0\le\mathrm{Re}\thinspace z\le 1$ 에서 유계이고 정칙인 $f$ 가 두 경계선에서 각각 $\vert f\vert\le M\_0$, $\vert f\vert\le M\_1$ 이면 $\mathrm{Re}\thinspace z=t$ 에서 $\vert f\vert\le M\_0^{1-t}M\_1^t$ 이다. $f(z)M\_0^{z-1}M\_1^{-z}$ 에 띠의 판을 적용하면 나온다. 유계 함수는 증가 조건을 만족하므로 정리의 가정이 맞는다.

# 활용

- [Riesz–Thorin 정리](riesz-thorin.md)는 연산자 노름을 띠 위의 정칙함수로 쓰고 Hadamard 세 선 정리를 적용해 증명된다.
- 지수형 전해석함수의 유일성 정리인 Carlson 정리(Carlson's theorem)는 오른쪽 반평면에서 지수형이고 허수축 위의 증가가 $e^{c\vert y\vert}$, $c\lt\pi$ 이며 음이 아닌 정수에서 $0$ 인 함수가 $0$ 뿐이라고 말한다. $\sin(\pi z)$ 가 경계 사례이고, 증명은 이 원리를 쓴다.
- Paley–Wiener 정리(Paley–Wiener theorem)는 지지 집합이 구간 $\lbrack -A,A\rbrack$ 인 함수의 [Fourier 변환](fourier-transform.md)을 지수형 $A$ 의 전해석함수로 특징짓고, 그 증명에서 실수축 위의 상계를 평면으로 옮길 때 이 원리를 쓴다.

[^1]: E. M. Stein, R. Shakarchi, *Complex Analysis*, Princeton Univ. Press, 2003, 4 장 3 절 — Phragmén–Lindelöf 원리와 세 선 정리.

# 연관 문서

## 선수지식

- [최대 절댓값 원리](maximum-modulus-principle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
