# Bloch 함수

# 개요

**Bloch 함수(Bloch function)** 는 단위원판에서 정칙이고, 도함수가 원판 경계에 다가갈 때 경계까지 거리의 역수보다 빨리 커지지 않는 함수다. $\log\frac{1}{1-z}$ 는 $z\to 1$ 에서 끝없이 커지지만 도함수 $\frac1{1-z}$ 는 경계까지 거리 $1-\lvert z\rvert$ 의 역수를 넘지 않는다.

등각사상 $\varphi$ 의 $\log\varphi'$ 가 이 꼴이어서, 영역의 경계가 아무리 복잡해도 $\varphi'$ 의 크기를 원판 위의 한 가지 함수 공간에서 다룬다. [Makarov 정리](makarov-theorem.md)의 증명은 이 공간의 함수가 반지름을 따라 얼마나 빨리 커지는지를 재는 데서 나온다.

# 직관

$f(z)=\log\frac{1}{1-z}$ 를 반지름 $z=r$ 을 따라 보면 $f(r)=\log\frac1{1-r}$ 로 끝없이 커진다. 경계까지 거리를 $d=1-r$ 로 두면 $f$ 는 $\log\frac1d$ 만큼 크다.

이 크기는 도함수의 상한에서 나온다. $\lvert f'(z)\rvert=\frac{1}{\lvert 1-z\rvert}\le\frac{1}{1-\lvert z\rvert}$ 이므로 $(1-\lvert z\rvert^2)\lvert f'(z)\rvert\le 1+\lvert z\rvert\le 2$ 다. 도함수가 $\frac{C}{1-\lvert z\rvert^2}$ 이하인 함수는 원점에서 반지름을 따라 적분해 다음을 얻는다.

$$
\lvert f(z)-f(0)\rvert\le\frac C2\log\frac{1+\lvert z\rvert}{1-\lvert z\rvert}
$$

모든 반지름에서 $\log\frac1d$ 만큼 커지는 것은 상한일 뿐이다. 반지름마다 따로 보면 대부분의 방향에서 그보다 훨씬 느리게 커지고, 그 빠르기가 성질 절의 반복로그 한계다.

# 정의

단위원판 $\mathbb D$ 에서 정칙인 $f$ 의 **Bloch 노름(Bloch seminorm)** 은 다음 값이다.

$$
\lVert f\rVert\_{\mathcal B}=\sup\_{z\in\mathbb D}(1-\lvert z\rvert^2)\lvert f'(z)\rvert
$$

이 값이 유한한 $f$ 를 **Bloch 함수** 라 하고, Bloch 함수 전체를 **Bloch 공간(Bloch space)** $\mathcal B$ 라 한다. 직관 절의 $\log\frac{1}{1-z}$ 는 $\lVert f\rVert\_{\mathcal B}\le 2$ 인 Bloch 함수이고 유계가 아니다.

# 성질

## Möbius 불변성

$\psi$ 가 $\mathbb D$ 의 자기동형이면 $\lVert f\circ\psi\rVert\_{\mathcal B}=\lVert f\rVert\_{\mathcal B}$ 다. [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)의 등호 경우인 다음 식에서 나온다.

$$
(1-\lvert\psi(z)\rvert^2)=\lvert\psi'(z)\rvert(1-\lvert z\rvert^2)
$$

$(1-\lvert z\rvert^2)\lvert f'(z)\rvert$ 는 쌍곡 거리로 잰 $f$ 의 변화율이므로, Bloch 함수는 쌍곡 거리에서 유클리드 거리로 가는 Lipschitz 함수다.

## 유계 함수

$\lvert f\rvert\le 1$ 인 정칙함수는 Schwarz–Pick 보조정리로 $(1-\lvert z\rvert^2)\lvert f'(z)\rvert\le 1-\lvert f(z)\rvert^2\le 1$ 이다. 그러므로 유계 정칙함수는 Bloch 함수이고, [Hardy 공간](hardy-spaces.md)의 $H^\infty$ 가 $\mathcal B$ 에 포함된다. $\log\frac1{1-z}$ 가 보이듯 포함은 진부분이다.

## 등각사상의 로그 도함수

$\varphi$ 가 $\mathbb D$ 에서 단사 정칙이면 $\log\varphi'$ 는 Bloch 함수이고 $\lVert\log\varphi'\rVert\_{\mathcal B}\le 6$ 이다[^1]. 증명의 요지는 $\varphi$ 를 자기동형과 합성해 $z$ 를 원점으로 옮긴 뒤 [de Branges 정리](de-branges-theorem.md)의 둘째 계수 부등식 $\lvert a_2\rvert\le 2$ 를 쓰는 것이다. 그러면 다음이 나온다.

$$
\Bigl\lvert(1-\lvert z\rvert^2)\frac{\varphi''(z)}{\varphi'(z)}-2\bar z\Bigr\rvert\le 4
$$

Koebe 함수 $k(z)=z/(1-z)^2$ 에서 $\log k'=\log(1+z)-3\log(1-z)$ 이고, $z\to 1$ 에서 Bloch 노름의 상한 $6$ 에 다가간다.

## 간격 급수

$n\_{k+1}\ge\lambda n_k$ 인 $\lambda\gt 1$ 이 있으면 $\sum a_kz^{n_k}$ 가 Bloch 함수일 필요충분조건은 $\sup_k\lvert a_k\rvert\lt\infty$ 다[^1]. $\sum_kz^{2^k}$ 는 Bloch 함수다.

반지름 $r=1-2^{-n}$ 에서 이 급수의 값은 대략 앞의 $n$ 항 $\sum_{k\le n}\zeta^{2^k}$ 이다. $\zeta$ 를 원 위에서 고르게 뽑으면 이 항들은 서로 거의 독립인 크기 $1$ 의 확률변수처럼 움직인다.

## 반복로그 한계

Makarov 는 상수 $C$ 가 있어 모든 Bloch 함수 $f$ 와 거의 모든 $\zeta\in\partial\mathbb D$ 에서 다음이 성립함을 증명했다[^2].

$$
\limsup\_{r\to 1}\frac{\lvert f(r\zeta)\rvert}{\sqrt{\log\frac{1}{1-r}\thinspace\log\log\log\frac{1}{1-r}}}\le C\lVert f\rVert\_{\mathcal B}
$$

$n=\log_2\frac1{1-r}$ 로 두면 분모는 $\sqrt{n\log\log n}$ 의 상수배이고, 간격 급수에서 $n$ 개 항의 합이 따르는 [반복로그 법칙](law-of-iterated-logarithm.md)의 크기와 같다. $\sum_kz^{2^k}$ 에서는 거의 모든 $\zeta$ 에서 극한 상한이 양수이므로, 분모의 꼴은 더 줄일 수 없다[^2].

# 활용

- Makarov 정리. 단순연결 영역의 등각사상 $\varphi$ 에서 $\log\varphi'$ 에 반복로그 한계를 적용하면 $\lvert\varphi'\rvert$ 가 거의 모든 반지름에서 경계까지 거리의 어떤 거듭제곱보다도 느리게 변하고, 조화 측도의 차원이 $1$ 이 된다.
- 쌍대 공간. Bloch 공간은 적분 가능한 정칙함수의 [Bergman 공간](bergman-spaces.md) $A^1$ 의 쌍대 공간과 동형이다[^3]. 이 쌍대성은 Bergman 사영의 유계성 계산에 쓰인다.

[^1]: Ch. Pommerenke, *Boundary Behaviour of Conformal Maps*, Grundlehren der mathematischen Wissenschaften 299, Springer, 1992, 4장.
[^2]: N. G. Makarov, "On the distortion of boundary sets under conformal mappings", *Proceedings of the London Mathematical Society* (3) 51 (1985), 369–384; Ch. Pommerenke, *Boundary Behaviour of Conformal Maps*, Springer, 1992, 8장.
[^3]: K. Zhu, *Operator Theory in Function Spaces*, 2nd ed., Mathematical Surveys and Monographs 138, American Mathematical Society, 2007, 5장.

# 연관 문서

## 선수지식

- [Makarov 정리](makarov-theorem.md)
- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)
- [반복로그 법칙](law-of-iterated-logarithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #probability #functional_analysis
