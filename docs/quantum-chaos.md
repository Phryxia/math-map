# 양자 혼돈

# 개요

**양자 혼돈(quantum chaos)** 은 고전 역학의 궤도가 혼돈적인 계에서 양자역학의 에너지 준위가 어떻게 흩어지는지 다루는 연구다. 직사각형 북의 막이 내는 진동수들을 작은 것부터 늘어놓으면 이웃한 두 진동수가 거의 붙어 있는 쌍이 흔하다. 두 반원을 직사각형으로 이은 경기장 모양의 북에서는 그런 쌍이 드물고 이웃한 진동수가 대체로 일정 거리 이상 떨어진다. 양자 혼돈은 이 차이를 이웃 진동수 간격의 분포로 재고, 북 위에서 벽에 반사되며 움직이는 공의 궤도가 혼돈적인지와 대응시킨다.

# 직관

수학에서 표준 모형은 닫힌 Riemann 다양체의 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)이고, 고전 역학계는 그 다양체의 측지선 흐름이다.

고윳값 쪽의 물음은 간격의 분포다. 측지선 흐름이 적분가능하면 간격이 Poisson 통계를, 혼돈적이면 [Wigner 반원법칙](wigner-semicircle.md) 문서의 무작위 [행렬](matrices.md) 앙상블과 같은 통계를 따를 것으로 추측된다. 고유함수 쪽의 물음은 고유함수의 질량이 다양체 위에 고르게 퍼지는지다.

평면 영역에서 경계값 $0$ 인 Laplace 고윳값 $\lambda_1\le\lambda_2\le\cdots$ 를 구한다. [Weyl 법칙](weyl-law.md)은 $\lambda$ 이하인 고윳값의 개수가 넓이에 비례해 $\vert\Omega\vert\lambda/4\pi$ 근처라고 정하지만, 이웃한 두 고윳값이 얼마나 떨어져 있는지는 정하지 않는다. 평균 간격이 $1$ 이 되도록 척도를 맞추고 이웃 간격의 분포를 본다.

변의 길이가 $a,b$ 인 직사각형에서는 고윳값이 $\pi^2(m^2/a^2+n^2/b^2)$ 로 주어진다. $a^2/b^2$ 이 [무리수](irrational-numbers.md)이면 서로 다른 $(m,n)$ 의 값들이 서로 무관하게 흩어져, 간격 분포가 독립인 점들의 간격 분포 $e^{-s}$ 에 가깝다. 간격이 $0$ 근처에 가장 많이 몰린다.

경기장 모양(두 반원을 직사각형으로 이은 영역)에서는 공이 벽에 반사되며 움직이는 궤도가 혼돈적이다. 이 영역의 고윳값을 수치로 구하면 간격이 $0$ 근처에서 드물고, 분포가 실대칭 무작위 행렬의 고윳값 간격 분포와 맞는다. 고윳값끼리 밀어내는 현상이 고전 궤도의 혼돈과 함께 나타난다.

# 정의

## 펼친 스펙트럼과 간격 분포

$N(\lambda)$ 를 $\lambda$ 이하인 고윳값의 개수, $\bar N(\lambda)$ 를 Weyl 법칙이 주는 매끄러운 주항이라 한다. $x_k=\bar N(\lambda_k)$ 로 바꾼 열이 **펼친 스펙트럼(unfolded spectrum)** 이고 평균 간격이 $1$ 이다.

$$
P(s)=\lim_{K\to\infty}\frac1K\char35{}\bigl\lbrace k\le K:x_{k+1}-x_k\le s\bigr\rbrace
$$

이 극한이 존재할 때 그 밀도 $p(s)$ 를 **이웃 간격 분포(nearest-neighbor spacing distribution)** 라 한다. 독립인 점들의 경우는 $p(s)=e^{-s}$ 이고, GOE(Gaussian orthogonal ensemble)의 경우는 Wigner 추정식(Wigner surmise)으로 $p(s)\approx\tfrac{\pi}{2}s\thinspace e^{-\pi s^2/4}$ 이다.

## 양자 에르고딕성

$\lbrace\varphi_k\rbrace$ 를 $L^2$ 정규화된 Laplace 고유함수의 정규직교 기저라 한다. 밀도 $1$ 인 부분열 $k_j$ 에서 모든 연속함수 $a$ 에 대해

$$
\int_M a\thinspace\vert\varphi_{k_j}\vert^2\thinspace d\mathrm{vol}\longrightarrow\frac{1}{\mathrm{vol}(M)}\int_M a\thinspace d\mathrm{vol}
$$

이면 기저가 **양자 에르고딕(quantum ergodic)** 하다고 한다. 부분열을 고르지 않고 전체 열에서 성립하면 **양자 유일 에르고딕(quantum unique ergodic)** 이다.

# 성질

## Berry–Tabor 추측과 BGS 추측

- **Berry–Tabor 추측(Berry–Tabor conjecture).** 측지선 흐름이 적분가능하고 일반적인 위치에 있으면 이웃 간격 분포가 $e^{-s}$ 다[^1].
- **BGS 추측(Bohigas–Giannoni–Schmit conjecture).** 측지선 흐름이 혼돈적이고 시간 반전 대칭이 있으면 간격 분포가 GOE 의 간격 분포와 같다[^2].

Eskin, Margulis, Mozes 는 변의 비가 일반적인 직사각형 원환면에서 고윳값의 쌍 상관이 독립인 점들의 쌍 상관과 같음을 증명했다.

## Shnirelman 정리

> **정리 (Shnirelman, Zelditch, Colin de Verdière).** 닫힌 Riemann 다양체의 측지선 흐름이 에르고딕이면 Laplace 고유함수의 임의의 정규직교 기저는 양자 에르고딕하다[^3].

증명의 요지. 위상 공간의 함수 $a$ 에 대응하는 의사미분작용소 $\mathrm{Op}(a)$ 를 두면 $\langle\mathrm{Op}(a)\varphi_k,\varphi_k\rangle$ 의 분산을 평균한 값이 0 으로 간다. 분산의 평균은 $a$ 를 측지선 흐름으로 시간 평균한 것의 분산으로 바뀌고, [에르고딕 정리](ergodic-theorem.md)가 그 시간 평균을 상수로 보낸다.

## 산술 곡면

$\Gamma\backslash\mathbb H$ 꼴의 산술 곡면은 측지선 흐름이 혼돈적인데도 고윳값 간격이 GOE 가 아니라 Poisson 에 가깝다. [Hecke 작용소](hecke-operators.md) 때문에 같은 길이의 닫힌 측지선이 매우 많아 대각합 공식의 기여가 상쇄되지 않는다. 고유함수 쪽에서는 [Maass 형식](maass-forms.md)의 Hecke 고유기저가 양자 유일 에르고딕함이 Lindenstrauss 와 Soundararajan 에 의해 증명되었다.

## zeta 함수의 영점

[Riemann zeta 함수](riemann-zeta.md)의 영점의 허수부를 펼치면 쌍 상관이 GUE(Gaussian unitary ensemble)의 쌍 상관과 같다는 것이 [쌍 상관 추측](pair-correlation-conjecture.md)이다. Odlyzko 의 수치 계산에서 이웃 간격 분포도 GUE 의 분포와 맞았다. 시간 반전 대칭이 없는 혼돈계의 통계가 GUE 이므로, 영점을 어떤 혼돈계의 고윳값으로 보는 해석이 나왔다.

# 활용

- **스펙트럼 기하.** [Selberg 대각합 공식](selberg-trace-formula.md)은 쌍곡 곡면의 고윳값 합을 닫힌 측지선의 길이 합과 같게 놓는다. 간격 통계의 계산은 이 공식의 닫힌 측지선 쪽에서 긴 측지선들의 기여를 다루는 문제가 된다.
- **고유함수의 상계.** 양자 에르고딕성은 고유함수가 몰리는 정도를 묻는 $L^\infty$ 노름의 추정과 함께 다루어진다. 닫힌 곡면에서 $\Vert\varphi\Vert\_\infty\le C\lambda^{1/4}$ 가 일반적인 상계이고(Avakumović, Levitan, Hörmander), 구면의 띠조화함수에서 이 차수가 나온다.
- **물리 실험.** 마이크로파 공동과 원자핵의 에너지 준위에서 간격 분포를 측정해 Poisson 과 GOE 를 구별한다. 원자핵 공명 준위의 간격이 GOE 를 따른다는 관측이 Wigner 가 무작위 행렬을 도입한 계기였다.

[^1]: M. V. Berry, M. Tabor, *Level clustering in the regular spectrum*, Proc. R. Soc. Lond. A 356 (1977), 375–394.
[^2]: O. Bohigas, M.-J. Giannoni, C. Schmit, *Characterization of chaotic quantum spectra and universality of level fluctuation laws*, Phys. Rev. Lett. 52 (1984), 1–4.
[^3]: A. I. Shnirelman, *Ergodic properties of eigenfunctions*, Uspekhi Mat. Nauk 29 (1974), 181–182. S. Zelditch, Duke Math. J. 55 (1987), 919–941. Y. Colin de Verdière, Comm. Math. Phys. 102 (1985), 497–502.

# 연관 문서

## 선수지식

- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)
- [Wigner 반원법칙](wigner-semicircle.md)
- [Weyl 법칙](weyl-law.md)

## 더 알아보기

- [Bogomolny–Schmit 추측](bogomolny-schmit-conjecture.md)

#differential_geometry #probability #analysis
