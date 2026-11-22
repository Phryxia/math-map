# Hélein 정칙성 정리

# 개요

**Hélein 정칙성 정리(Hélein's regularity theorem)** 는 평면 영역에서 구면으로 가는 약한 조화사상이 매끄럽다는 정리다. 평면의 액정에서 각 점의 분자 방향은 단위벡터, 곧 구면의 점이고, 방향이 바뀌는 정도를 잰 에너지 $\int\vert\nabla u\vert^2$ 의 임계점이 평형 상태다. 그런 임계점은 처음에 에너지가 유한하다는 것만 알려진 함수이므로, 분자 방향이 갑자기 끊기는 점이 있을 수 있는지를 따로 물어야 한다.

Hélein 정리는 평면에서는 그런 점이 없음을 보인다. 증명은 방정식의 비선형 항을 발산이 $0$ 인 장과 기울기의 내적으로 다시 적어 [실 Hardy 공간](real-hardy-spaces.md)에 넣는 것이다.

# 직관

원판 $B\subset\mathbb R^2$ 에서 단위구면 $S^{m-1}\subset\mathbb R^m$ 로 가는 사상 $u$ 의 에너지 $E(u)=\tfrac12\int_B\vert\nabla u\vert^2$ 를 구면값 사상 사이에서 변분하면 다음 방정식이 나온다.

$$
-\Delta u=\vert\nabla u\vert^2u
$$

$u$ 의 에너지가 유한하다는 것만 알면 우변 $\vert\nabla u\vert^2u$ 는 적분 가능할 뿐이다. 평면에서 우변이 적분 가능하다는 것으로는 해가 연속이 되지 않는다. $v(x)=\log\log(1/\vert x\vert)$ 는 $\vert x\vert\lt 1/2$ 에서 에너지가 유한하고 $\Delta v=-1/(\vert x\vert^2\log^2\vert x\vert)$ 가 적분 가능하지만, 원점에서 무한대로 간다.

구면값이라는 조건 $\vert u\vert=1$ 을 미분하면 $\sum_ju^j\nabla u^j=0$ 이다. 이것을 쓰면 우변의 $i$ 번째 성분을 다음과 같이 다시 적을 수 있다.

$$
\vert\nabla u\vert^2u^i=\sum_j\bigl(u^i\nabla u^j-u^j\nabla u^i\bigr)\cdot\nabla u^j
$$

괄호 안의 장은 방정식에서 발산이 $u^i\Delta u^j-u^j\Delta u^i=0$ 이고, 그 옆의 $\nabla u^j$ 는 기울기여서 회전이 $0$ 이다. 이런 두 장의 내적은 실 Hardy 공간에 들고, 우변이 실 Hardy 공간에 들면 위의 $\log\log$ 같은 해를 허용하지 않는다.

# 정의

## 조화사상

$\Omega\subset\mathbb R^n$ 은 열린집합이다. $u\in H^1(\Omega;\mathbb R^m)$ 이 거의 모든 점에서 $\vert u\vert=1$ 이고 다음 방정식을 [Schwartz 분포](schwartz-distributions.md)의 뜻으로 만족하면 $u$ 를 **약한 조화사상(weakly harmonic map)** 이라 한다.

$$
-\Delta u=\vert\nabla u\vert^2u
$$

이 방정식은 시험 함수 $\varphi$ 로 만든 구면값 변분 $u_t=(u+t\varphi)/\vert u+t\varphi\vert$ 에서 $\tfrac{d}{dt}E(u_t)\vert\_{t=0}=0$ 인 것과 동치다. 매끄러운 약한 조화사상을 **조화사상(harmonic map)** 이라 한다. 일반 목표에서는 $S^{m-1}$ 대신 $\mathbb R^m$ 에 매장된 콤팩트 Riemann 다양체 $N$ 을 두고, 우변을 $N$ 의 제2 기본형식으로 쓴다.

직관 절의 $v$ 는 구면값이 아니므로 조화사상이 아니다. $\mathbb R^3$ 의 단위공에서 $u(x)=x/\vert x\vert$ 는 $\vert\nabla u\vert^2=2/\vert x\vert^2$ 가 적분 가능해서 $H^1$ 에 들고, 원점 밖에서 방정식을 만족하며 원점에서도 분포의 뜻으로 만족한다. 그러므로 3차원의 약한 조화사상이고 원점에서 연속이 아니다.

# 성질

## 보존 법칙

정리(Hélein). $u$ 가 $S^{m-1}$ 로 가는 약한 조화사상이면 모든 $i,j$ 에서 다음이 성립한다[^1].

$$
\mathrm{div}\bigl(u^i\nabla u^j-u^j\nabla u^i\bigr)=0
$$

증명. 분포의 뜻에서 발산은 $u^i\Delta u^j-u^j\Delta u^i$ 이고, 방정식을 넣으면 $-\vert\nabla u\vert^2(u^iu^j-u^ju^i)=0$ 이다. 정의역 차원에 의존하지 않는 등식이다.

## 정칙성 정리

정리(Hélein). $\Omega\subset\mathbb R^2$ 이면 $S^{m-1}$ 로 가는 약한 조화사상은 매끄럽다. 같은 결론이 콤팩트 Riemann 다양체로 가는 약한 조화사상에서도 성립한다[^1][^2].

증명의 요지. 보존 법칙과 직관 절의 재배열로 $\Delta u^i$ 는 발산이 $0$ 인 $L^2$ 장과 회전이 $0$ 인 $L^2$ 장의 내적의 합이다. Coifman–Lions–Meyer–Semmes 정리로 이 내적은 국소적으로 실 Hardy 공간 $\mathcal H^1$ 에 든다. $\mathcal H^1$ 에서 Riesz 변환이 유계이므로 $u$ 의 이계 도함수가 적분 가능하고, 평면에서 이계 도함수가 적분 가능한 함수는 연속이다. 연속인 해는 [타원형 정칙성](elliptic-regularity.md)의 반복으로 매끄럽다.

일반 목표에서는 보존 법칙이 그대로 성립하지 않는다. Hélein 은 $u^\ast TN$ 의 정규직교틀을 발산이 $0$ 이 되게 고르는 Coulomb 틀(Coulomb frame)을 만들어 같은 꼴을 얻었다[^2].

## 3차원 이상의 반례

정의 절의 $x/\vert x\vert$ 는 $n=3$ 에서 불연속인 약한 조화사상이다. Rivière 는 $\mathbb R^3$ 의 공에서 $S^2$ 로 가는 약한 조화사상 가운데 모든 점에서 불연속인 것을 만들었다[^3]. 그러므로 $n\ge 3$ 에서 약한 조화사상에 대한 정칙성은 없고, 에너지 최소 사상이나 정상 사상처럼 조건을 더한 경우에 특이점 집합의 크기를 재는 부분 정칙성 정리가 대신 성립한다.

## 반대칭 퍼텐셜 꼴

Rivière 는 평면의 등각 불변 변분 문제의 Euler–Lagrange 방정식이 모두 다음 꼴로 적힌다는 것을 보였다. $\Omega$ 는 $L^2$ 에 드는 반대칭 행렬값 1형식이다[^4].

$$
-\Delta u=\Omega\cdot\nabla u
$$

구면값 조화사상에서는 $\Omega^{ij}=u^i\nabla u^j-u^j\nabla u^i$ 이고, 이것은 직관 절의 재배열이다. 이 꼴의 모든 $H^1$ 해는 연속이다[^4].

# 활용

- 액정. 평면에 놓인 네마틱 액정의 방향장은 단순화한 Oseen–Frank 에너지에서 $S^2$ 로 가는 조화사상이다. 평면에서는 정칙성 정리로 에너지 유한한 평형 상태에 결함이 없고, 3차원 시료의 점 결함 $x/\vert x\vert$ 는 정의 절의 반례다.
- 상수 평균곡률 곡면. 평균곡률이 상수 $H$ 인 곡면의 등각 매개화는 $\Delta u=2H\thinspace u_x\times u_y$ 를 만족한다. 우변이 Jacobi 행렬식 꼴이어서 [div–curl 보조정리](div-curl-lemma.md)와 같은 구조를 가지고, Wente 부등식(Wente's inequality)으로 연속성을 얻는다.
- 몰림과 콤팩트성. 평면 조화사상의 열은 에너지가 유계여도 작은 구면이 떨어져 나가는 몰림(bubbling)으로 수렴이 깨질 수 있다. Sacks–Uhlenbeck 의 분석은 에너지가 작은 원판에서 정칙성 추정을 쓰고, 그 추정의 약한 해 판이 Hélein 정리다.

[^1]: F. Hélein, "Régularité des applications faiblement harmoniques entre une surface et une sphère", *Comptes Rendus de l'Académie des Sciences, Série I* **311** (1990), 519–524.

[^2]: F. Hélein, *Harmonic Maps, Conservation Laws and Moving Frames*, 2nd ed., Cambridge University Press (2002).

[^3]: T. Rivière, "Everywhere discontinuous harmonic maps into spheres", *Acta Mathematica* **175** (1995), 197–226.

[^4]: T. Rivière, "Conservation laws for conformally invariant variational problems", *Inventiones Mathematicae* **168** (2007), 1–22.

# 연관 문서

## 선수지식

- [div–curl 보조정리](div-curl-lemma.md)
- [실 Hardy 공간](real-hardy-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #differential_geometry
