# 에탈 기본군

# 개요

에탈 기본군은 대수다양체 위의 유한 덮개를 분류하는 유한위상군이다. 루프를 쓰지 않고 덮개만으로 정의하므로 복소 위상이 없는 곳, 곧 유한체나 정수환 위의 도식에서도 쓸 수 있다.

[기본군](fundamental-group.md)과 [Galois 이론](galois-theory.md)이 이 정의의 두 특수 사례다. 복소다양체에서는 위상 기본군의 유한위상 완비화가 나오고, 한 점 $\mathrm{Spec}\thinspace K$ 에서는 절대 Galois 군 $\mathrm{Gal}(K^{\mathrm{sep}}/K)$ 가 나온다. Grothendieck 이 둘을 한 정의 아래 놓았다[^1].

수체 위의 다양체에서는 기하적 기본군과 Galois 군이 하나의 완전열로 묶이고, 유리점이 그 열의 절을 준다. 유리점을 군론의 대상으로 바꾸는 이 대응이 [Chabauty–Kim 방법](chabauty-kim.md)과 절 추측의 출발이다.

# 직관

## 루프를 그릴 수 없는 곳

유한체 위의 곡선에 기본군을 주려고 한다. 위상 기본군은 공간 안에 원을 그려 놓고 한 점으로 줄일 수 있는지 묻는 것이다. 대수다양체의 Zariski 위상에서 열린집합은 유한 개의 점을 뺀 것이고, 비어 있지 않은 두 열린집합은 반드시 만난다. 원을 그려 넣을 자리가 없으므로 이 방법으로는 군이 나오지 않는다.

## 덮개의 자기동형군

원을 쓰지 않고 같은 군을 얻을 수 있는지 복소수 쪽에서 확인한다. $\mathbb C^{\times}$ 의 위상 기본군은 $\mathbb Z$ 다. 이 공간의 연결 [덮개공간](covering-spaces.md)은 $z\mapsto z^n$ 하나뿐이고, $n$ 번째 덮개의 자기동형군은 $n$ 차 단위근의 곱셈군 $\mu_n\cong\mathbb Z/n$ 이다.

$n\mid m$ 이면 $m$ 번째 덮개가 $n$ 번째 덮개 위에 놓이고 $\mathbb Z/m\to\mathbb Z/n$ 이 따라온다. 이 역계의 극한이 $\hat{\mathbb Z}=\varprojlim\mathbb Z/n$ 이다. 루프를 하나도 그리지 않고 덮개의 자기동형군만 세어 $\mathbb Z$ 의 유한위상 완비화를 얻었다.

## 덮개의 환 사상

덮개 $z\mapsto z^n$ 은 환 사상 $k\lbrack t,t^{-1}\rbrack\to k\lbrack u,u^{-1}\rbrack$, $t\mapsto u^n$ 이다. 위상을 쓰지 않고 이 사상만으로 덮개임을 판정하려면 각 점 위의 섬유가 $n$ 개로 갈라져 있어야 하고, 그것은 미분 $nu^{n-1}$ 이 가역이라는 조건이다. 표수가 $0$ 이면 모든 $n$ 에서 성립하고 위의 계산이 그대로 재현된다.

## 표수 p 에서 남는 덮개

같은 방정식을 표수 $p$ 의 대수적으로 닫힌 체 위에서 쓴다. $p\mid n$ 이면 $nu^{n-1}=0$ 이므로 조건이 깨진다. 남는 덮개는 $p$ 와 서로소인 $n$ 에서 온 것뿐이고 그 역극한은 $\hat{\mathbb Z}^{(p')}$ 다.

대신 표수 $p$ 에서만 조건을 통과하는 덮개가 새로 생긴다. $y^p-y=t$ 의 미분은 $py^{p-1}-1=-1$ 이라 언제나 가역이다. 이 덮개는 복소수 쪽에 대응물이 없고, 아핀 직선처럼 위상 기본군이 자명한 공간에도 덮개를 붙인다. 유한 덮개를 세어 얻는 군이 에탈 기본군이다.

# 정의

## 유한 에탈 사상

도식 사상 $f\colon Y\to X$ 가 유한이고 평탄하며 비분기이면 **유한 에탈**이라 한다. 아핀 조각에서 $\mathcal O_Y$ 가 $\mathcal O_X$ 가군으로 유한 계수 자유이고 상대 미분 가군이 사라지는 것과 같다.

$$
\Omega_{Y/X}=0
$$

$X$ 위의 유한 에탈 사상 전체가 범주를 이룬다. 사상은 $X$ 위의 도식 사상이다.

## 섬유 함자

$\bar b\colon\mathrm{Spec}\thinspace\bar k\to X$ 를 기하적 점이라 한다. 각 유한 에탈 덮개 $Y\to X$ 에 그 점 위의 섬유를 대응시키는 것이 **섬유 함자**다.

$$
F_{\bar b}(Y)=\mathrm{Hom}\_X(\bar b,Y)
$$

$F_{\bar b}(Y)$ 는 유한집합이고 그 크기가 덮개의 차수다.

## 에탈 기본군

**에탈 기본군**은 섬유 함자의 자기동형군이다.

$$
\pi_1^{\mathrm{et}}(X,\bar b)=\mathrm{Aut}(F_{\bar b})
$$

유한 덮개마다 유한군으로 상이 가고, 그 상들의 역극한 위상을 준다. 이 위상에서 $\pi_1^{\mathrm{et}}$ 은 콤팩트 완전분리 위상군, 곧 유한위상군이다.

## Grothendieck 의 주정리

$X$ 가 연결 도식이면 $F_{\bar b}$ 가 다음 두 범주의 동치를 준다[^1].

| 유한 에탈 덮개 | $\pi_1^{\mathrm{et}}$ 집합 |
|---|---|
| $Y\to X$ | $\pi_1^{\mathrm{et}}$ 이 연속으로 작용하는 유한집합 |
| 연결 덮개 | 추이적 작용 |
| Galois 덮개 | 열린 정규부분군의 잉여류 집합 |
| 덮개의 자기동형군 | 안정자의 정규화군 몫 |

덮개 하나를 군의 부분군 하나로 옮기는 대응이므로 Galois 대응의 도식 판본이다.

# 성질

## 체 위의 경우

$X=\mathrm{Spec}\thinspace K$ 라 하자. $K$ 위의 유한 에탈 대수는 유한 분리확대의 유한 곱이고, 연결인 것은 유한 분리확대 하나다. 주정리의 대응이 Galois 이론의 기본 정리가 된다.

$$
\pi_1^{\mathrm{et}}(\mathrm{Spec}\thinspace K)\cong\mathrm{Gal}(K^{\mathrm{sep}}/K)
$$

## 복소다양체

$X$ 가 $\mathbb C$ 위 유한형 연결 도식이면, 해석적 공간 $X(\mathbb C)$ 의 유한 덮개가 모두 대수적이다. 이것이 Riemann 존재정리이고[^2], 다음을 준다.

$$
\pi_1^{\mathrm{et}}(X,\bar b)\cong\widehat{\pi_1(X(\mathbb C),b)}
$$

우변은 위상 기본군의 유한위상 완비화다. 유한 덮개만 보므로 무한 지표 부분군의 정보는 남지 않는다. $\pi_1(X(\mathbb C))$ 가 유한위상군으로 단사가 아닐 수 있고, 그때 에탈 기본군은 위상 기본군보다 작다.

## 기본 완전열

$k$ 를 체, $X$ 를 $k$ 위 기하적 연결인 유한형 도식, $\bar b$ 를 기하적 점이라 한다. 다음이 완전하다[^1].

$$
1\to\pi_1^{\mathrm{et}}(X_{\bar k},\bar b)\to\pi_1^{\mathrm{et}}(X,\bar b)\to\mathrm{Gal}(\bar k/k)\to1
$$

왼쪽 항이 **기하적 기본군**이다. 유리점 $x\in X(k)$ 마다 오른쪽 사상의 절 $s_x\colon\mathrm{Gal}(\bar k/k)\to\pi_1^{\mathrm{et}}(X,\bar b)$ 가 하나 정해지고, 켤레를 무시하면 절의 켤레류가 남는다. 절이 하나 있으면 켤레로 기하적 기본군 위의 Galois 작용이 정해진다.

## 표수 p 의 야생 부분

$\bar{\mathbb F}\_p$ 위에서 위의 계산이 답을 준다.

$$
\pi_1^{\mathrm{et}}(\mathbb G\_{m,\bar{\mathbb F}\_p})=\hat{\mathbb Z}^{(p')},
\qquad
\pi_1^{\mathrm{et}}(\mathbb A^1\_{\bar{\mathbb F}\_p})\neq1
$$

왼쪽에서 $p$ 성분이 빠지는 것은 $t\mapsto u^p$ 가 에탈이 아니기 때문에 생긴다. 오른쪽이 자명하지 않은 것은 Artin–Schreier 덮개 $y^p-y=f(t)$ 때문이다. 복소수 위의 $\mathbb A^1$ 은 단순연결이므로 표수 $p$ 에서만 나오는 현상이다.

$\ell\neq p$ 인 $\ell$ 성분은 표수 $0$ 으로 올릴 때 보존되고, 이것이 $\ell$ 진 [에탈 코호몰로지](etale-cohomology.md)를 쓰는 이유다.

# 활용

- **Tate 가군.** 아벨 다양체 $A$ 에서 연결 유한 에탈 덮개는 곱셈 $\lbrack n\rbrack\colon A\to A$ 로 얻는 것뿐이므로 $\pi_1^{\mathrm{et}}(A\_{\bar k})\cong\prod\_\ell T\_\ell A$ 다. [Galois 표현](galois-representations.md)이 다루는 대상이 기하적 기본군 그 자체다.
- **에탈 코호몰로지의 1 차.** 유한 아벨군 계수의 1 차 코호몰로지가 연속 준동형의 군 $\mathrm{Hom}\_{\mathrm{cont}}(\pi_1^{\mathrm{et}}(X),\mathbb Z/n)$ 이다. [Weil 추측](deligne-weil-conjectures.md)의 무대인 코호몰로지의 저차가 이 군으로 계산된다.
- **Chabauty–Kim 방법.** 기하적 기본군의 $\mathbb Q_p$ 계수 단일값 몫을 하강 중심열로 자르고, 각 층에서 유리점의 상을 Selmer 다양체 안에 가둔다. 층을 깊게 잡을수록 조건이 느슨해지는 것이 이 방법의 구조다[^3].
- **절 추측.** 수체 위 쌍곡곡선에서 유리점의 집합과 기본 완전열의 절의 켤레류 집합이 일대일 대응한다는 것이 Grothendieck 의 절 추측이다[^4].

[^1]: A. Grothendieck, *Revêtements étales et groupe fondamental (SGA 1)*, Lecture Notes in Math. **224**, Springer (1971). 주정리는 Exposé V, 기본 완전열은 Exposé IX 다.

[^2]: T. Szamuely, *Galois Groups and Fundamental Groups*, Cambridge Studies in Advanced Mathematics **117** (2009), 5 장. Riemann 존재정리의 도식 판본은 SGA 1 Exposé XII 다.

[^3]: M. Kim, *The motivic fundamental group of $\mathbb P^1-\lbrace 0,1,\infty\rbrace$ and the theorem of Siegel*, Invent. Math. **161** (2005), 629–656.

[^4]: A. Grothendieck, *Brief an G. Faltings* (1983), in *Geometric Galois Actions 1*, London Math. Soc. Lecture Note Ser. **242** (1997), 49–58.

# 연관 문서

## 선수지식

- [덮개공간](covering-spaces.md)
- [Galois 이론](galois-theory.md)

## 더 알아보기

- [에탈 코호몰로지](etale-cohomology.md)
- [Chabauty–Kim 방법](chabauty-kim.md)

#field_theory #algebraic_topology #number_theory
