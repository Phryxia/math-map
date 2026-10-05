# 타원형 정칙성

# 개요

[Lax–Milgram 정리](lax-milgram.md)는 약형식에서 $H^1$ 해 하나를 준다. 그 해가 몇 번 미분되는지는 약형식이 말하지 않는다.

타원형 정칙성은 계수와 자료가 매끄러우면 약해도 그만큼 매끄럽다는 정리다. 자료가 $H^k$ 에 있으면 해가 $H^{k+2}$ 에 있어 미분 계단이 둘 올라간다. 방정식의 좌변이 이차 미분이므로, 방정식 자체가 약해에 없던 정보를 준다.

# 직관

$\mathbb R^n$ 에서 $-\Delta u=f$ 를 약형식으로 풀어 $u\in H^1$ 을 얻었다. 자료 $f$ 가 매끄러운데도 해에 대해 아는 것은 일차 약미분이 $L^2$ 에 있다는 것뿐이다. [Fourier 변환](fourier-transform.md)으로 방정식을 다시 적으면 $\vert\xi\vert^2\hat u(\xi)=\hat f(\xi)$ 이므로 $\hat u=\hat f/\vert\xi\vert^2$ 이고, $u$ 가 $H^s$ 에 드는지는 $(1+\vert\xi\vert^2)^{s/2}\hat u$ 가 $L^2$ 에 드는지로 정해진다. $\vert\xi\vert$ 가 큰 곳에서 $(1+\vert\xi\vert^2)^{(k+2)/2}\hat u$ 와 $(1+\vert\xi\vert^2)^{k/2}\hat f$ 의 크기가 같으므로, $f\in H^k$ 이면 $u\in H^{k+2}$ 다.

$\vert\xi\vert$ 가 $0$ 에 가까운 곳에서는 $1/\vert\xi\vert^2$ 가 커지지만, 이 부분은 자료의 저주파 성분이라 유계영역에서는 낮은 차수의 노름으로 흡수된다. 계수가 자리마다 변하면 곱이 합성곱으로 바뀌어 이 계산을 그대로 쓸 수 없다. 대신 해를 한 칸 옮긴 차 $u(x+he_i)-u(x)$ 를 $h$ 로 나눈 것을 시험함수에 넣어 그 $H^1$ 노름이 $h$ 와 무관하게 유계임을 보이면, $h\to 0$ 에서 이차 약미분이 $L^2$ 에 든다는 같은 결론이 나온다.

# 정의

## 균등 타원 연산자

유계영역 $\Omega\subset\mathbb R^n$ 에서 계수 $a_{ij}$ 가 유계 측정가능이고 대칭일 때 발산형 연산자를 둔다.

$$
Lu=-\sum_{i,j=1}^n\partial_i\bigl(a_{ij}(x)\thinspace\partial_j u\bigr)
$$

어떤 $\lambda\gt 0$ 에 대해 모든 $x\in\Omega$ 와 모든 $\xi\in\mathbb R^n$ 에서 다음이 성립하면 $L$ 을 **균등 타원**이라 한다.

$$
\sum_{i,j}a_{ij}(x)\thinspace\xi_i\xi_j\ \ge\ \lambda\thinspace\vert\xi\vert^2
$$

## 약해

$f\in H^{-1}(\Omega)$ 에 대해 $u\in H_0^1(\Omega)$ 가 모든 $v\in H_0^1(\Omega)$ 에서 다음을 만족하면 $Lu=f$ 의 **약해**라 한다.

$$
\int_\Omega\sum_{i,j}a_{ij}\thinspace\partial_j u\thinspace\partial_i v\thinspace dx=\langle f,v\rangle
$$

균등 타원성이 좌변의 강제성을 주므로 Lax–Milgram 정리가 약해의 존재와 유일성을 준다.

# 성질

## 내부 정칙성

$a_{ij}\in C^\infty(\Omega)$ 이고 $f\in H^k\_{\mathrm{loc}}(\Omega)$ 이면 약해는 $u\in H^{k+2}\_{\mathrm{loc}}(\Omega)$ 다[^1].

증명의 요지. $k=0$ 에서 보이고 되풀이한다. 자른 함수 $\chi$ 를 곱해 안쪽만 보고, 시험함수로 차분몫의 차분몫 $v=-D_i^{-h}\bigl(\chi^2 D_i^{h}u\bigr)$ 를 넣는다. 좌변의 주항이 $\lambda\thinspace\Vert\chi\thinspace\nabla D_i^h u\Vert\_{L^2}^2$ 를 아래로 받치고, 계수의 미분에서 나오는 나머지 항과 우변은 Cauchy–Schwarz 와 Young 부등식으로 그 항의 작은 몫과 $\Vert u\Vert\_{H^1}$, $\Vert f\Vert\_{L^2}$ 로 가른다. 결과로 $\Vert\nabla D_i^h u\Vert\_{L^2}$ 가 $h$ 와 무관하게 유계이고, 차분몫의 균등 유계는 약미분의 존재와 같으므로 $\partial_i\partial_j u\in L^2\_{\mathrm{loc}}$ 다.

## 경계까지의 정칙성

$\partial\Omega$ 가 $C^{k+2}$ 이고 $f\in H^k(\Omega)$ 이면 $u\in H^{k+2}(\Omega)$ 이고 다음 추정이 성립한다.

$$
\Vert u\Vert\_{H^{k+2}(\Omega)}\le C\bigl(\Vert f\Vert\_{H^k(\Omega)}+\Vert u\Vert\_{L^2(\Omega)}\bigr)
$$

증명의 요지는 경계를 평평하게 펴는 좌표변환으로 반공간의 문제로 바꾸는 것이다. 평평한 경계에서는 경계에 평행한 방향으로 차분몫을 쓸 수 있고, 수직 방향의 이차 미분은 방정식에서 다른 항을 옮겨 풀어 얻는다.

## Weyl 보조정리

$\Omega$ 에서 $\Delta u=0$ 을 만족하는 [분포](schwartz-distributions.md) $u$ 는 매끄러운 조화함수와 같다[^2].

증명의 요지. 평균값 성질을 가진 매끄러운 핵과의 합성곱 $u\ast\rho_\varepsilon$ 이 $\varepsilon$ 에 무관하게 같은 분포를 주므로, $u$ 가 그 매끄러운 함수와 분포로서 일치한다. 조화함수의 매끄러움이 방정식만으로 나오므로 자료의 정칙성을 가정할 자리가 없다.

## De Giorgi–Nash–Moser 정리

계수가 유계 측정가능일 뿐이면 두 계단을 올릴 수 없고, 얻는 것은 해의 Hölder 연속성이다. [De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)가 어떤 $\alpha\gt 0$ 에 대해 $u\in C^{0,\alpha}\_{\mathrm{loc}}(\Omega)$ 를 주며, 지수 $\alpha$ 는 $n$ 과 타원성 상수 $\lambda$ 에만 의존한다[^3]. 이 정리가 Hilbert 의 열아홉째 문제에 대한 답이다.

# 활용

- **Dirichlet 문제의 고전해.** 약형식으로 얻은 해가 $C^2$ 에 들면 방정식을 각 점에서 만족한다. 내부 정칙성과 Sobolev 매입을 이어 쓰면 $f$ 가 매끄러운 자리에서 해가 고전해가 된다.
- **고유함수.** $-\Delta\varphi=\mu\varphi$ 의 약해에 정칙성을 되풀이 적용하면 오른쪽이 $\varphi$ 자신이라 계단이 계속 올라가 $\varphi\in C^\infty$ 가 된다. Laplace 고유값 문제의 고유함수가 매끄럽다는 근거다.
- **비선형 문제의 열기.** 변분법으로 얻은 최소점이 약한 의미의 방정식을 만족할 때, 선형화한 연산자의 정칙성이 최소점의 매끄러움을 끌어올린다. 최소곡면과 조화사상의 정칙성 이론이 이 방식을 쓴다.
- **$L^p$ 판과 Hölder 판.** $f\in L^p$ 에서 $u\in W^{2,p}$ 를 주는 추정은 [Calderón–Zygmund 이론](calderon-zygmund-theory.md)에서 나오고, [Hölder 공간](holder-spaces.md)의 $f\in C^{0,\alpha}$ 에서 $u\in C^{2,\alpha}$ 를 주는 추정이 Schauder 추정이다. 둘 다 $H^k$ 판과 같은 두 계단 구조를 갖는다.

[^1]: L. Nirenberg, "Remarks on strongly elliptic partial differential equations", Communications on Pure and Applied Mathematics **8** (1955), 648–674. 차분몫으로 내부 정칙성을 얻는 방법을 준다.

[^2]: H. Weyl, "The method of orthogonal projection in potential theory", Duke Mathematical Journal **7** (1940), 411–444.

[^3]: J. Moser, "A new proof of De Giorgi's theorem concerning the regularity problem for elliptic differential equations", Communications on Pure and Applied Mathematics **13** (1960), 457–468.

# 연관 문서

## 선수지식

- [Schwartz 분포](schwartz-distributions.md)
- [Lax–Milgram 정리](lax-milgram.md)

## 더 알아보기

- [Schauder 추정](schauder-estimates.md)
- [De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)

#functional_analysis #analysis #measure_theory
